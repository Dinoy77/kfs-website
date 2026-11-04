<?php
/**
 * Kerala Finishing School — application form handler (cPanel / PHP).
 *
 * Receives the form from /apply, checks every field and document again on the
 * server, then:
 *   1. emails the application with all documents attached to the KFS team,
 *   2. sends a short "we received your application" email to the student,
 *   3. keeps a copy of the documents + a CSV list OUTSIDE the public website folder.
 *
 * Settings: change only the lines in the SETTINGS block below.
 */

// ===================== SETTINGS =====================
const TO_EMAIL   = 'enquiry@keralafinishingschool.com'; // where applications are sent
const FROM_NAME  = 'Kerala Finishing School Website';
const SEND_ACK   = false;                                // true = also email a confirmation to the student
const MAX_BYTES  = 2 * 1024 * 1024;                      // 2 MB per file
const COURSES    = ['B Pharm', 'D Pharm', 'B Pharm Lateral Entry', 'MBA Pay After Placement', 'PGDM Pay After Placement', 'MCA Pay After Placement', 'Pharma Innovator', 'Corporate Pharma'];
// Copies are saved in /home/<cpanel-user>/kfs-applications (not reachable from the web)
define('SAVE_DIR', dirname(__DIR__, 2) . '/kfs-applications');
// Gmail login for sending (App Password). Kept OUTSIDE the website folder and out of GitHub:
//   /home/<cpanel-user>/kfs-mail-config.php
define('MAIL_CONFIG', dirname(__DIR__, 2) . '/kfs-mail-config.php');
// ====================================================

date_default_timezone_set('Asia/Kolkata');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply($ok, $message = '', $code = 200) {
    http_response_code($code);
    echo json_encode(['success' => $ok, 'message' => $message]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(false, 'Method not allowed.', 405);
}

// Very large uploads empty $_POST completely
if (empty($_POST) && (int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 0) {
    reply(false, 'The files are too large. Each file must be under 2 MB.', 413);
}

// Spam bots fill the hidden "website" field; pretend it worked
if (!empty($_POST['website'])) {
    reply(true);
}

function field($key, $max = 200) {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v); // drop control characters
    return mb_substr($v, 0, $max);
}
function oneLine($v) { return trim(preg_replace('/[\r\n]+/', ' ', $v)); } // safe for email headers

$d = [
    'name'    => oneLine(field('name', 100)),
    'dob'     => field('dob', 10),
    'gender'  => field('gender', 10),
    'parent'  => oneLine(field('parent', 100)),
    'phone'   => oneLine(field('phone', 20)),
    'email'   => oneLine(field('email', 120)),
    'address' => field('address', 400),
    'city'    => oneLine(field('city', 60)),
    'state'   => oneLine(field('state', 60)),
    'course'  => field('course', 60),
    'qualification' => oneLine(field('qualification', 150)),
];

// ---- Check the fields (same rules as the form) ----
if ($d['name'] === '')                                   reply(false, 'Please enter your full name.');
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $d['dob']))      reply(false, 'Please enter a valid date of birth.');
if (!in_array($d['gender'], ['Male', 'Female', 'Other'], true)) reply(false, 'Please select your gender.');
if ($d['parent'] === '')                                 reply(false, 'Please enter your father / guardian name.');
if (strlen(preg_replace('/\D/', '', $d['phone'])) < 10)   reply(false, 'Please enter a valid phone number.');
if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL))     reply(false, 'Please enter a valid email address.');
if ($d['address'] === '')                                reply(false, 'Please enter your address.');
if ($d['city'] === '')                                   reply(false, 'Please enter your city / district.');
if ($d['state'] === '')                                  reply(false, 'Please enter your state.');
if (!in_array($d['course'], COURSES, true))              reply(false, 'Please select a course.');
if ($d['qualification'] === '')                          reply(false, 'Please enter your highest qualification.');

// ---- Check the documents (real file type, not just the name) ----
$fileRules = [
    'photo'     => ['label' => 'Candidate photo',      'required' => true,  'types' => ['image/jpeg' => 'jpg', 'image/png' => 'png']],
    'tenth'     => ['label' => '10th certificate',     'required' => true,  'types' => ['application/pdf' => 'pdf', 'image/jpeg' => 'jpg', 'image/png' => 'png']],
    'twelfth'   => ['label' => '12th certificate',     'required' => true,  'types' => ['application/pdf' => 'pdf', 'image/jpeg' => 'jpg', 'image/png' => 'png']],
    'scorecard' => ['label' => 'Entrance score card',  'required' => false, 'types' => ['application/pdf' => 'pdf', 'image/jpeg' => 'jpg', 'image/png' => 'png']],
    'documents' => ['label' => 'Important documents',  'required' => false, 'types' => ['application/pdf' => 'pdf', 'image/jpeg' => 'jpg', 'image/png' => 'png'], 'max' => 5 * 1024 * 1024],
];

$finfo = new finfo(FILEINFO_MIME_TYPE);
$files = [];
foreach ($fileRules as $key => $rule) {
    $f = $_FILES[$key] ?? null;
    $missing = !$f || ($f['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE;
    if ($missing) {
        if ($rule['required']) reply(false, 'Please upload your ' . strtolower($rule['label']) . '.');
        continue;
    }
    $max = $rule['max'] ?? MAX_BYTES;
    if ($f['error'] === UPLOAD_ERR_INI_SIZE || $f['error'] === UPLOAD_ERR_FORM_SIZE || $f['size'] > $max) {
        reply(false, $rule['label'] . ' is larger than ' . round($max / 1048576) . ' MB.');
    }
    if ($f['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($f['tmp_name'])) {
        reply(false, 'Could not upload the ' . strtolower($rule['label']) . '. Please try again.');
    }
    $mime = $finfo->file($f['tmp_name']);
    if (!isset($rule['types'][$mime])) {
        reply(false, $rule['label'] . ': only ' . strtoupper(implode(', ', array_unique($rule['types']))) . ' files are allowed.');
    }
    $ext  = $rule['types'][$mime];
    $safe = preg_replace('/[^a-z0-9]+/i', '-', $d['name']);
    $files[] = [
        'key'   => $key,
        'label' => $rule['label'],
        'mime'  => $mime,
        'name'  => trim($safe, '-') . '_' . $key . '.' . $ext,   // e.g. Anu-Mathew_tenth.pdf
        'tmp'   => $f['tmp_name'],
    ];
}

// ---- Application number ----
$appId = 'KFS-' . date('ymd-His') . '-' . strtoupper(bin2hex(random_bytes(2)));
$when  = date('d M Y, h:i A');
$h     = fn($v) => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');

// ---- Keep a copy (best effort: the email still goes if this fails) ----
$savedTo = '';
$dir = SAVE_DIR . '/' . date('Y-m') . '/' . $appId;
if (@is_dir($dir) || @mkdir($dir, 0750, true)) {
    foreach ($files as $f) { @copy($f['tmp'], $dir . '/' . $f['name']); }
    $csv = SAVE_DIR . '/applications.csv';
    $new = !file_exists($csv);
    if ($fh = @fopen($csv, 'a')) {
        if ($new) fputcsv($fh, ['Application ID', 'Date', 'Name', 'DOB', 'Gender', 'Father/Guardian', 'Phone', 'Email', 'Address', 'City', 'State', 'Course', 'Highest Qualification']);
        fputcsv($fh, [$appId, $when, $d['name'], $d['dob'], $d['gender'], $d['parent'], $d['phone'], $d['email'], $d['address'], $d['city'], $d['state'], $d['course'], $d['qualification']]);
        fclose($fh);
    }
    $savedTo = $dir;
}

// ---- Email to KFS (HTML body + attachments) ----
$rows = [
    'Application ID' => $appId, 'Submitted' => $when, 'Course' => $d['course'],
    'Full name' => $d['name'], 'Date of birth' => date('d-m-Y', strtotime($d['dob'])), 'Gender' => $d['gender'],
    'Father / guardian' => $d['parent'], 'Phone' => $d['phone'], 'Email' => $d['email'],
    'Address' => $d['address'], 'City / district' => $d['city'], 'State' => $d['state'],
    'Highest qualification' => $d['qualification'],
];
$table = '';
foreach ($rows as $k => $v) {
    $table .= '<tr><td style="padding:8px 12px;border:1px solid #d5dae6;background:#eef1f8;font-weight:bold;width:170px">' . $h($k)
            . '</td><td style="padding:8px 12px;border:1px solid #d5dae6">' . nl2br($h($v)) . '</td></tr>';
}
$docs = '';
foreach ($files as $f) { $docs .= '<li>' . $h($f['label']) . ' — ' . $h($f['name']) . '</li>'; }
$html = '<div style="font-family:Arial,sans-serif;color:#15213f">'
      . '<h2 style="color:#12275e;margin:0 0 4px">New application – ' . $h($d['course']) . '</h2>'
      . '<p style="margin:0 0 16px;color:#56627f">Received from the website application form.</p>'
      . '<table style="border-collapse:collapse;font-size:14px">' . $table . '</table>'
      . '<h3 style="color:#12275e">Documents attached</h3><ul>' . $docs . '</ul>'
      . ($savedTo ? '<p style="color:#56627f;font-size:12px">A copy is saved on the server in kfs-applications.</p>' : '')
      . '</div>';

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

$mailCfg = is_file(MAIL_CONFIG) ? (include MAIL_CONFIG) : null;

function logMailError($msg) {
    @file_put_contents(SAVE_DIR . '/mail-errors.log', '[' . date('d M Y, h:i A') . '] ' . $msg . "\n", FILE_APPEND);
}

// Sends through Gmail (SMTP) when kfs-mail-config.php exists; returns true/false
function sendMail($to, $subject, $html, $files = [], $replyEmail = '', $replyName = '') {
    global $mailCfg;
    if (!$mailCfg || empty($mailCfg['user'])) {
        logMailError('Not sent to ' . $to . ': kfs-mail-config.php is missing.');
        return false;
    }
    $m = new PHPMailer(true);
    try {
        $m->isSMTP();
        $m->Host = $mailCfg['host'] ?? 'localhost';
        $m->Port = $mailCfg['port'] ?? 25;
        if (empty($mailCfg['pass'])) {
            // No password: send through this server's own mail system (localhost)
            $m->SMTPAuth    = false;
            $m->SMTPSecure  = '';
            $m->SMTPAutoTLS = false;
        } else {
            $m->SMTPAuth   = true;
            $m->Username   = $mailCfg['user'];
            $m->Password   = str_replace(' ', '', $mailCfg['pass']); // App Passwords are often copied with spaces
            $m->SMTPSecure = $mailCfg['secure'] ?? (($m->Port == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS);
            if (($mailCfg['secure'] ?? null) === '') $m->SMTPAutoTLS = false; // only for local testing
        }
        $m->CharSet    = 'UTF-8';
        $m->setFrom($mailCfg['user'], FROM_NAME);  // Gmail only sends from its own address
        $m->addAddress($to);
        if ($replyEmail) $m->addReplyTo($replyEmail, $replyName);
        $m->isHTML(true);
        $m->Subject = $subject;
        $m->Body    = $html;
        $m->AltBody = trim(html_entity_decode(strip_tags(str_replace(['<br>', '</tr>', '</p>'], "\n", $html))));
        foreach ($files as $f) $m->addAttachment($f['tmp'], $f['name'], PHPMailer::ENCODING_BASE64, $f['mime']);
        $m->send();
        return true;
    } catch (Throwable $e) {
        logMailError('Not sent to ' . $to . ': ' . $m->ErrorInfo);
        return false;
    }
}

$sent = sendMail(
    TO_EMAIL,
    'New application: ' . $d['name'] . ' – ' . $d['course'] . ' (' . $appId . ')',
    $html,
    $files,
    $d['email'],
    $d['name']
);

if (!$sent && !$savedTo) {
    reply(false, 'Sorry, we could not submit your application right now. Please call us on +91 77360 25600.', 500);
}

// ---- Confirmation to the student ----
if (SEND_ACK) {
    $ack = '<div style="font-family:Arial,sans-serif;color:#15213f">'
         . '<p>Dear ' . $h($d['name']) . ',</p>'
         . '<p>Thank you for applying to Kerala Finishing School for <b>' . $h($d['course']) . '</b>. '
         . 'We have received your application and documents.</p>'
         . '<p>Your application number is <b>' . $h($appId) . '</b>. Our team will contact you shortly.</p>'
         . '<p>For any questions, call +91 77360 25600 or reply to ' . TO_EMAIL . '.</p>'
         . '<p>Regards,<br>Kerala Finishing School<br>Thiruvananthapuram</p></div>';
    sendMail($d['email'], 'Application received – Kerala Finishing School (' . $appId . ')', $ack, [], TO_EMAIL, 'Kerala Finishing School');
}

reply(true, $appId);