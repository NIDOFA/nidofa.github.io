<?php
include 'chat.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['message'])) {
        addMessage($_POST['message']);
        echo 'success';
    } else {
        echo 'fail';
    }
}
?>
