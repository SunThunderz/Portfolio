<?php
session_start();

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.html");
    exit();
}

$conn = new mysqli("localhost", "root", "", "portfolio_db");
$result = $conn->query("SELECT * FROM messages ORDER BY created_at DESC");

if (!$result) {
    die("Error fetching messages: " . $conn->error);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Messages</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            position: relative;
        }

        .messages-container {
            width: 100%;
            max-width: 1000px;
            margin-top: 20px;
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgb(0, 0, 1);
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 24px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table th, table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        table th {
            background-color: #7556e6;
            color: white;
        }

        table tr:hover {
            background-color: #f1f1f1;
        }

        .actions {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        .actions a {
            background-color: #7556e6;
            color: white;
            padding: 6px 12px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        .actions a:hover {
            background-color: #a68eff;
        }

        .logout-container {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .logout-container button {
            background-color: #e74c3c;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .logout-container button:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>

<div class="logout-container">
    <form action="logout.php" method="POST">
      <button type="submit">Logout</button>
    </form>
</div>

<div class="messages-container">
    <h2>Admin Messages</h2>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($row = $result->fetch_assoc()) { ?>
            <tr>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><?= htmlspecialchars($row['email']) ?></td>
                <td><?= nl2br(htmlspecialchars($row['message'])) ?></td>
                <td class="actions">
                    <a href="edit_message.php?id=<?= $row['id'] ?>">Edit</a>
                    <a href="delete_message.php?id=<?= $row['id'] ?>">Delete</a>
                </td>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</div>

</body>
</html>