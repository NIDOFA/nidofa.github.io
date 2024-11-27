<?php
session_start();

if (!isset($_SESSION['messages'])) {
    $_SESSION['messages'] = [];
}

function addMessage($message) {
    $_SESSION['messages'][] = $message;
}

function getMessages() {
    return $_SESSION['messages'];
}
?>
