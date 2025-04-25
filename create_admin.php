<?php
$conn = new mysqli("localhost", "root", "", "portfolio_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = "username"; // put your desired username here
$password = password_hash("password", PASSWORD_DEFAULT); // put your desired password here

// After putting your desired username and password for admin
// Open your browser and visit
// http://localhost/portfolio/create_admin.php
// To creatde admin account
// It should display "Admin user created successfully."
// Delete this file after creating the admin account

$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo "Admin user created successfully.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>