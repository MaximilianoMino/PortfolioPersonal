<?php
$destinatario = 'maximiliano.mino323@gmail.com';

$nombre = $_POST['nombre'];
$motivo = $_POST['motivo'];
$email = $_POST['email'];
$comentario = $_POST['comentario'];

$header = 'Enviado desde el portfolio personal';
$mensajeCompleto = $comentario . "\nAtentamente: ". $nombre;

mail($destinatario, $asunto, $mensajeCompleto, $header);
?>