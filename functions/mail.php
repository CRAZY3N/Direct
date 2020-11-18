<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$men = $_POST['mensaje'];

$header = 'FROM: ' . 'Direct-Consulting' . $email .'\r\n';
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Su email: " . $email;
$mensaje = "Este mensaje fue envíado por: " . $nombre . "\r\n";
$mensaje = "Mensaje: " . $men . "\r\n";

$para = "atencionaclientes@direct-cs.com.mx";
$asunto = "Solicitud de Pagina Web";

mail($para, $asunto, $mensaje, $header);

header("Location:index.html");

?>