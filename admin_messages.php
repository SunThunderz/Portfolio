<?php
session_start();

// Database connection
$conn = new mysqli("localhost", "root", "", "portfolio_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch messages
$result = $conn->query("SELECT * FROM messages ORDER BY created_at DESC");

if (!$result) {
    die("Error fetching messages: " . $conn->error);
}
?>
<a href="logout.php" style="float: right; margin: 10px;">Logout</a>
<h2>Messages</h2>
<table border="1">
<tr><th>Name</th><th>Email</th><th>Message</th><th>Actions</th></tr>
<?php while ($row = $result->fetch_assoc()) { ?>
<tr>
  <td><?= htmlspecialchars($row['name']) ?></td>
  <td><?= htmlspecialchars($row['email']) ?></td>
  <td><?= htmlspecialchars($row['message']) ?></td>
  <td>
    <a href="edit_message.php?id=<?= $row['id'] ?>">Edit</a> |
    <a href="delete_message.php?id=<?= $row['id'] ?>">Delete</a>
  </td>
</tr>
<?php } ?>
</table>
