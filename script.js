document.getElementById("send-button").addEventListener("click", () => {
    const userMessage = document.getElementById("user-input").value;
    const chatWindow = document.getElementById("chat-window");
    const botResponse = "This is a placeholder response.";
    chatWindow.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatWindow.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    document.getElementById("user-input").value = "";
});
