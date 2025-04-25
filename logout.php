<?php
session_start();
session_unset();
session_destroy();
header("Location: login.html"); // Redirect back to login
exit();
?>