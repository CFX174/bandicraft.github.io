<?php
$servername = "localhost";
$username = "root"; // Usuario local por defecto
$password = ""; // Por defecto no tiene contraseña
$dbname = "bandicraft";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
