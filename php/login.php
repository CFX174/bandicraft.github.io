<?php
require 'db_config.php';

$user = $_POST['username'];
$pass = $_POST['password'];

if (empty($user) || empty($pass)) {
    die("Completa todos los campos.");
}

$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 1) {
    $stmt->bind_result($hashed_pass);
    $stmt->fetch();
    if (password_verify($pass, $hashed_pass)) {
        session_start();
        $_SESSION['username'] = $user;
        echo "Login exitoso";
    } else {
        echo "Contraseña incorrecta.";
    }
} else {
    echo "Usuario no encontrado.";
}

$stmt->close();
$conn->close();
?>
