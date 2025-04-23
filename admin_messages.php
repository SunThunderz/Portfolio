<?php
$conn = new mysqli("localhost", "root", "", "portfolio_db");
$result = $conn->query("SELECT * FROM messages ORDER BY created_at DESC");
?>

<h2>Messages</h2>
<table border="1">
<tr><th>Name</th><th>Email</th><th>Message</th><th>Actions</th></tr>
<?php while ($row = $result->fetch_assoc()) { ?>
<tr>
  <td><?= $row['name'] ?></td>
  <td><?= $row['email'] ?></td>
  <td><?= $row['message'] ?></td>
  <td>
    <a href="edit_message.php?id=<?= $row['id'] ?>">Edit</a> |
    <a href="delete_message.php?id=<?= $row['id'] ?>">Delete</a>
  </td>
</tr>
<?php } ?>
</table>