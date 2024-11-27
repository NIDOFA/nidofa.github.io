document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const chatForm = document.getElementById('chat-form');

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = messageInput.value;

        fetch('server/send-message.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `message=${encodeURIComponent(message)}`
        }).then(response => response.text()).then(data => {
            if (data === 'success') {
                messageInput.value = '';
                loadMessages();
            } else {
                alert('Failed to send message.');
            }
        });
    });

    function loadMessages() {
        fetch('server/get-messages.php')
            .then(response => response.json())
            .then(data => {
                chatBox.innerHTML = '';
                data.forEach(msg => {
                    const div = document.createElement('div');
                    div.textContent = msg;
                    chatBox.appendChild(div);
                });
            });
    }

    loadMessages();
    setInterval(loadMessages, 3000); // Refresh messages every 3 seconds
});
