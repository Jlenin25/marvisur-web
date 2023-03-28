<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

$mail1 = new PHPMailer(true);
$mail1->isSMTP();
$mail1->SMTPDebug = 0;
$mail1->SMTPSecure = 'ssl';
$mail1->Host = 'mail.expresomarvisur.com';
$mail1->Port = 465;
$mail1->SMTPAuth = true;
$mail1->Username = 'mailer-marvisur@expresomarvisur.com';
$mail1->Password = '.catu$RQHlg#';
$mail1->setFrom('mailer-marvisur@expresomarvisur.com', 'Marvisur auto-mail');
//$mail->addReplyTo('desarrollo.ti@expresomarvisur.com', 'Your Name');
//$mail->addAddress('desarrollo.ti.marvisur@gmail.com', 'Receiver Name');
//$mail->Subject = 'Testing PHPMailer';
//$mail->Body = 'This is a plain text message body';
//$mail->addAttachment('test.txt');

?>