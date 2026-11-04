<?php
/**
 * Kerala Finishing School — contact form handler (cPanel / PHP).
 *
 * Receives the "Send us a message" form, checks it, emails it to the KFS team and
 * keeps a copy in kfs-applications/enquiries.csv (outside the public website folder).
 * Uses the same email settings file as the application form (kfs-mail-config.php).
 */

// ===================== SETTINGS =====================
const TO_EMAIL  = 'enquiry@keralafinishingschool.com';  // where enquiries are sent
const FROM_NAME = 'Kerala Finishing School Website';
define('SAVE_DIR', dirname(__DIR__, 2) . '/kfs-applications');
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

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') reply(false, 'Method not allowed.', 405);
if (!empty($_POST['website'])) reply(true); // spam bots fill this hidden field

function field($key, $max = 200) {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v);
    return mb_substr($v, 0, $max);
}
function oneLine($v) { return trim(preg_replace('/[\r\n]+/', ' ', $v)); }

$d = [
    'name'    => oneLine(field('name', 100)),
    'email'   => oneLine(field('email', 120)),
    'phone'   => oneLine(field('phone', 20)),
    'option'  => oneLine(field('option', 120)),
    'message' => field('message', 2000),
];

if ($d['name'] === '')                                   reply(false, 'Please enter your name.');
if (strlen(preg_replace('/\D/', '', $d['phone'])) < 10)  reply(false, 'Please enter a valid phone number.');
if ($d['email'] !== '' && !filter_var($d['email'], FILTER_VALIDATE_EMAIL)) reply(false, 'Please enter a valid email address.');

$when = date('d M Y, h:i A');
$h    = fn($v) => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');

// ---- Keep a copy (best effort) ----
if (@is_dir(SAVE_DIR) || @mkdir(SAVE_DIR, 0750, true)) {
    $csv = SAVE_DIR . '/enquiries.csv';
    $new = !file_exists($csv);
    if ($fh = @fopen($csv, 'a')) {
        if ($new) fputcsv($fh, ['Date', 'Name', 'Phone', 'Email', 'Interested in', 'Message']);
        fputcsv($fh, [$when, $d['name'], $d['phone'], $d['email'], $d['option'], $d['message']]);
        fclose($fh);
    }
}

// ---- Email to KFS ----
$rows = [
    'Received' => $when, 'Name' => $d['name'], 'Phone' => $d['phone'],
    'Email' => $d['email'] ?: '—', 'Interested in' => $d['option'] ?: '—', 'Message' => $d['message'] ?: '—',
];
$table = '';
foreach ($rows as $k => $v) {
    $table .= '<tr><td style="padding:8px 12px;border:1px solid #d5dae6;background:#eef1f8;font-weight:bold;width:140px;vertical-align:top">' . $h($k)
            . '</td><td style="padding:8px 12px;border:1px solid #d5dae6">' . nl2br($h($v)) . '</td></tr>';
}
$html = '<div style="font-family:Arial,sans-serif;color:#15213f">'
      . '<h2 style="color:#12275e;margin:0 0 4px">New website enquiry</h2>'
      . '<p style="margin:0 0 16px;color:#56627f">Sent from the contact form on keralafinishingschool.com.</p>'
      . '<table style="border-collapse:collapse;font-size:14px">' . $table . '</table></div>';

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;

$cfg = is_file(MAIL_CONFIG) ? (include MAIL_CONFIG) : null;
$sent = false;
if ($cfg && !empty($cfg['user'])) {
    $m = new PHPMailer(true);
    try {
        $m->isSMTP();
        $m->Host = $cfg['host'] ?? 'localhost';
        $m->Port = $cfg['port'] ?? 25;
        if (empty($cfg['pass'])) {
            $m->SMTPAuth = false; $m->SMTPSecure = ''; $m->SMTPAutoTLS = false;
        } else {
            $m->SMTPAuth   = true;
            $m->Username   = $cfg['user'];
            $m->Password   = str_replace(' ', '', $cfg['pass']);
            $m->SMTPSecure = $cfg['secure'] ?? (($m->Port == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS);
            if (($cfg['secure'] ?? null) === '') $m->SMTPAutoTLS = false;
        }
        $m->CharSet = 'UTF-8';
        $m->setFrom($cfg['user'], FROM_NAME);
        $m->addAddress(TO_EMAIL);
        if ($d['email'] !== '') $m->addReplyTo($d['email'], $d['name']);
        $m->isHTML(true);
        $m->Subject = 'New website enquiry: ' . $d['name'] . ($d['option'] ? ' – ' . $d['option'] : '');
        $m->Body    = $html;
        $m->AltBody = "New website enquiry\n\n" . implode("\n", array_map(fn($k, $v) => "$k: $v", array_keys($rows), $rows));
        $m->send();
        $sent = true;
    } catch (Throwable $e) {
        @file_put_contents(SAVE_DIR . '/mail-errors.log', '[' . $when . '] Contact form not sent: ' . $m->ErrorInfo . "\n", FILE_APPEND);
    }
} else {
    @file_put_contents(SAVE_DIR . '/mail-errors.log', '[' . $when . "] Contact form not sent: kfs-mail-config.php is missing.\n", FILE_APPEND);
}

if (!$sent) reply(false, 'Sorry, your message could not be sent right now. Please call us or message us on WhatsApp.', 500);
reply(true);