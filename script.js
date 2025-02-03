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

