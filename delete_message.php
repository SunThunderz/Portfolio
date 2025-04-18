<?php
$conn = new mysqli("localhost", "root", "", "portfolio_db");
$id = $_GET['id'];
$conn->query("DELETE FROM messages WHERE id=$id");
header("Location: admin_messages.php");
?>
