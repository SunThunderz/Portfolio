<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.html");
    exit();
}

$conn = new mysqli("localhost", "root", "", "portfolio_db");
$id = $_GET['id'];
$conn->query("DELETE FROM messages WHERE id=$id");
header("Location: admin_messages.php");
?>