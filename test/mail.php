<?php
$to = "mannyhappenings@gmail.com";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "parakram@parakram.com";
$headers = "From:" . $from;
if(mail($to,$subject,$message,$headers))
	echo "Mail Sent.";
else 
	echo "Mail couldn't be Sent.";
?> 