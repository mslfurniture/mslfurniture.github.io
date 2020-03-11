<?php

$recepient = "markiyan43@gmail.com";
$sitename = "MSL furniture";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$textarea = trim($_POST["textarea"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $textarea";

$pagetitle = "Нова заявка з сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");