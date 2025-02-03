document.addEventListener("DOMContentLoaded", () => {
    const chatHistory = document.getElementById("chat-history");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to create a message bubble
    function createMessageBubble(text, sender) {
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("message", sender);
        messageBubble.innerText = text;
        chatHistory.appendChild(messageBubble);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll to latest message
    }

    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message === "") return;

        createMessageBubble(message, "user"); // Display user message
        userInput.value = ""; // Clear input field

        setTimeout(() => {
            generateBotResponse(message);
        }, 500); // Simulate bot typing delay
    }

    // Function to generate bot response
    function generateBotResponse(userMessage) {
        let botResponse = "I'm just a simple bot! Try saying 'hello' or 'help'.";
        const responses = {
            hello: "Hi there! How can I assist you today?",
            help: "Sure! You can ask me about anything. Try 'What can you do?'",
            bye: "Goodbye! Have a great day!",
            "what is your name": "I'm Chatbot! What's yours?",
        };
        

        userMessage = userMessage.toLowerCase(); // Normalize input

        for (const key in responses) {
            if (userMessage.includes(key)) {
                botResponse = responses[key];
                break;
            }
        }

        createMessageBubble(botResponse, "bot");
    }

    // Event Listeners
    sendButton.addEventListener("click", handleUserInput);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});

// Mic-js
const micIcon = document.getElementById('micIcon');
const userInput = document.getElementById('user-input');
const transcriptionDisplay = document.getElementById('transcription');

let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true; // This allows continuous speech recognition
    recognition.interimResults = true; // This will give real-time results

    recognition.onstart = function() {
        transcriptionDisplay.textContent = 'Listening...';
        micIcon.classList.remove('fa-microphone'); // Change to active mic icon
        micIcon.classList.add('fa-microphone-alt');
    };

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }

        // Display the result in the user input field
        userInput.value = transcript;  // Set the transcript to user input field
    };

    recognition.onerror = function(event) {
        transcriptionDisplay.textContent = 'Error occurred: ' + event.error;
    };

    recognition.onend = function() {
        transcriptionDisplay.textContent = 'Stopped listening.';
        micIcon.classList.remove('fa-microphone-alt');
        micIcon.classList.add('fa-microphone');
    };
}

// Activate speech recognition when mic icon is clicked
micIcon.addEventListener('click', function() {
    if (recognition && recognition.start) {
        recognition.start();
    }
});
