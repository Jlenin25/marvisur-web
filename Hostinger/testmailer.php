<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'mail.expresomarvisur.com';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = 'mailer-marvisur@expresomarvisur.com';
$mail->Password = '.catu$RQHlg#';
$mail->setFrom('mailer-marvisur@expresomarvisur.com', 'Marvisur auto-mail');
$mail->addReplyTo('desarrollo.ti@expresomarvisur.com', 'Your Name');
$mail->addAddress('desarrollo.ti.marvisur@gmail.com', 'Receiver Name');
$mail->Subject = 'Testing PHPMailer';
$mail->Body = 'This is a plain text message body';
//$mail->addAttachment('test.txt');
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'The email message was sent.';
}
?>