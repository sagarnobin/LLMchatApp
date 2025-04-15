const form = document.getElementById('chat-form');
const messageInput = document.getElementById('message');
const messagesContainer = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = messageInput.value.trim();
    if (!msg) return;
    
    appendMessage('You', msg);
    messageInput.value = '';

    // Show loading indicator
    const loadingElement = document.createElement('div');
    loadingElement.classList.add('message', 'loading');
    loadingElement.innerHTML = `<em>Loading...</em>`;
    messagesContainer.appendChild(loadingElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // POST request to Llama3.2 model server with required payload
    fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            model: "llama3.2",
            prompt: msg,
            stream: false
        })
    })
    .then(response => response.json())
    .then(data => {
        loadingElement.remove();
        const reply = (data && data.response) ? data.response : 'No response from model.';
        appendMessage('Llama3.2', reply);
    })
    .catch(() => {
        loadingElement.remove();
        appendMessage('Llama3.2', 'Error fetching response.');
    });
});

function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}