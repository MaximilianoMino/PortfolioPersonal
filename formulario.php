
<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$comentario = $_POST['comentario'];

$destinatario = "maximiliano.mino323@gmail.com";
$motivo = $_POST['motivo'];

$header = 'Enviado desde el portfolio personal';
$mensajeCompleto = "$comentario . '\nAtentamente: '. $nombre";


echo $nombre;
mail($destinatario, $asunto, $mensajeCompleto, $header);
?>