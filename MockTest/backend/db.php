<?php
$host = 'localhost';
$db = 'mock_test';
$user = 'root'; // default XAMPP username
$pass = ''; // default XAMPP password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
