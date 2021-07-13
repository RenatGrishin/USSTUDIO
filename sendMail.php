<?php

$text = 'US STUDIO
Вы записаны на обмен валют.
Вы обмениваете '.$_POST['sum'].'руб на '.$_POST['total'].$_POST['currency'];

if (!empty($_POST['email']) && !empty($_POST['sum'])) {
  mail($_POST['email'], 'Обен валюты', $text, 'Тестовое задание.');
  echo 'Письмо отправлено';
}else{
  echo 'Ошибка приотправки';
}

//header('Location: index.html');

?>