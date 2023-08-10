const chatHistory = document.getElementById('chat-history');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        // Adiciona a mensagem ao histórico do chat na interface do usuário
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatHistory.appendChild(messageElement);

        // Envia a mensagem para o servidor (chat.php) para salvar no arquivo
        fetch('chat.php', {
            method: 'POST',
            body: new URLSearchParams({ message }),
        });

        // Limpa a caixa de entrada
        messageInput.value = '';
    }
});

// Carrega o histórico do chat ao carregar a página
fetch('chat_history.txt')
    .then(response => response.text())
    .then(history => {
        const messages = history.trim().split('\n');
        messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;
            chatHistory.appendChild(messageElement);
        });
    });
