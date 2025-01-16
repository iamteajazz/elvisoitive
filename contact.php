<?php
$email_to = "elvis4real28@gmail.com";
$name = $_POST["ajax_name"]; // Corrected variable name
$email_from = "elvis4real28@gmail.com";
$reply_to = $_POST["ajax_email"]; // Corrected variable name
$message = $_POST["ajax_message"]; // Corrected variable name
$email_subject = "Feedback from website";
$headers = "From: " . $email_from . "\r\n";
$headers .= "Reply-To: " . $reply_to . "\r\n"; // Corrected variable name

$message = "Name: ". $name . "\r\nMessage: " . $message;

ini_set("sendmail_from", $email_from);
$sent = mail($email_to, $email_subject, $message, $headers, "-f" .$email_from);
if ($sent)
{
    echo "Your message has been sent successfully. <a href='index.html'>Go back home</a>";
} else {
    echo "Failed to send the message. Please try again later.";
}
?>
