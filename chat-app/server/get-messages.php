<?php
include 'chat.php';

header('Content-Type: application/json');
echo json_encode(getMessages());
?>
