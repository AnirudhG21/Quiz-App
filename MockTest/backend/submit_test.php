<?php
header('Content-Type: application/json');
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$score = 0;

foreach ($data as $key => $response) {
    $questionId = substr($key, -1); // Get the question number
    $stmt = $conn->prepare("SELECT correct_option FROM questions WHERE id = ?");
    $stmt->bind_param("i", $questionId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $question = $result->fetch_assoc();
        if ($question['correct_option'] === $response) {
            $score++;
        }
    }
}

echo json_encode(['score' => $score]);
$conn->close();
?>
