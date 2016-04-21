<?php
	$name = $_POST["n"];
	$email = $_POST["e"];
	
	if(isset($name) and isset($email)){
		$message = "Subscription has issued a $name entered in the data base!";
		$to = "myadmin@local.host";
		$from = "site@local.host";
		$subject = "New application";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReplay-to: $from\r\nContent-type: text/palin; charset=utf-8\r\n";
		mail($to, $subject, $message, $headers);
		echo 1;
	}
	else echo 0;
?>