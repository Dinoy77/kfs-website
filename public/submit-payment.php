<?php
// Put in /public next to submit-application.php. Emails the payment details to the KFS team.
header('Content-Type: application/json');
$to = 'admissions@YOURDOMAIN.com'; // <-- change to your KFS email

function clean($k) { return trim(preg_replace('/[\r\n]+/', ' ', strip_tags($_POST[$k] ?? ''))); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { echo json_encode(['success'=>false,'message'=>'Invalid request.']); exit; }

$ref = clean('ref'); $name = clean('name'); $phone = clean('phone'); $email = clean('email');
$course = clean('course'); $amount = clean('amount'); $txn = clean('txn');
if (!preg_match('/^[A-Za-z0-9]{10,25}$/', $txn)) { echo json_encode(['success'=>false,'message'=>'Invalid transaction ID.']); exit; }

$body = "Application fee payment (UPI QR)\n\nApplication ID: $ref\nName: $name\nPhone: $phone\nEmail: $email\nCourse: $course\nAmount: Rs. $amount\nUPI transaction ID: $txn\n\nVerify this in the bank statement before confirming the admission.";
$headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) $headers .= "Reply-To: $email\r\n";

$subject = "KFS payment: $name ($ref)";
$f = $_FILES['screenshot'] ?? null;
if ($f && $f['error'] === UPLOAD_ERR_OK && $f['size'] <= 2*1024*1024 &&
    in_array(strtolower(pathinfo($f['name'], PATHINFO_EXTENSION)), ['jpg','jpeg','png','pdf'])) {
  $b = md5(uniqid()); $fname = preg_replace('/[^A-Za-z0-9._-]/', '_', $f['name']);
  $headers .= "MIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"$b\"\r\n";
  $msg = "--$b\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n$body\r\n"
       . "--$b\r\nContent-Type: application/octet-stream; name=\"$fname\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"$fname\"\r\n\r\n"
       . chunk_split(base64_encode(file_get_contents($f['tmp_name']))) . "--$b--";
  $ok = mail($to, $subject, $msg, $headers);
} else {
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $ok = mail($to, $subject, $body, $headers);
}
echo json_encode($ok ? ['success'=>true] : ['success'=>false,'message'=>'Could not send. Please try again.']);