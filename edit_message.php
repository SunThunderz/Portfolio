<?php
$conn = new mysqli("localhost", "root", "", "portfolio_db");
$id = $_GET['id'];
$data = $conn->query("SELECT * FROM messages WHERE id=$id")->fetch_assoc();

if ($_POST) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $conn->query("UPDATE messages SET name='$name', email='$email', message='$message' WHERE id=$id");
  header("Location: admin_messages.php");
}
?>

<form method="post">
  <input type="text" name="name" value="<?= $data['name'] ?>"><br>
  <input type="email" name="email" value="<?= $data['email'] ?>"><br>
  <textarea name="message"><?= $data['message'] ?></textarea><br>
  <button type="submit">Update</button>
</form>