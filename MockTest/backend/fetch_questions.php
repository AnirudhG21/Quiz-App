<?php
header('Content-Type: application/json');
include 'db.php';

// Fetch 10 random questions
$result = $conn->query("SELECT * FROM questions ORDER BY RAND() LIMIT 10");
$questions = [];

// Check if the query was successful
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $questions[] = $row;
    }
} else {
    // Handle query error
    http_response_code(500);
    echo json_encode(['error' => 'Error fetching questions: ' . $conn->error]);
}

echo json_encode($questions);
$conn->close();
?>
