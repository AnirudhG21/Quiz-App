<?php
header('Content-Type: application/json');
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$phone = $data['phone'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (phone_number, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $phone, $email, $password);
$result = $stmt->execute();

if ($result) {
    echo json_encode(['message' => 'User registered successfully!']);
} else {
    echo json_encode(['message' => 'Error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
