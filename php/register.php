<?php
require 'db_config.php';

$user = $_POST['username'];
$pass = $_POST['password'];

if (empty($user) || empty($pass)) {
    die("Por favor completa todos los campos.");
}

$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $user, $hashed_pass);

if ($stmt->execute()) {
    echo "Registro exitoso";
} else {
    echo "Error: El usuario ya existe o fallo en la DB.";
}

$stmt->close();
$conn->close();
?>
