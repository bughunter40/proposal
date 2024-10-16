const responses = {
    "hello": "Hi Gautam!",
    "how are you?": "I'm just a program, but thanks for asking!",
    "what is your name?": "I'm your friendly chatbot!",
    "who made you?": " gautam",
    "who am i?": "you are gautam jha",
    "bye": "Goodbye! Have a great day!",
};

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const userMessage = inputField.value.trim();
    if (userMessage) {
        displayMessage('You: ' + userMessage);
        const botResponse = getBotResponse(userMessage.toLowerCase());
        displayMessage('Chatbot: ' + botResponse);
        inputField.value = '';
    }
}

function displayMessage(message) {
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += '<p>' + message + '</p>';
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    return responses[userMessage] || "I'm not sure I understand.";
}