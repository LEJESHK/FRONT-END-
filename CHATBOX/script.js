

const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatBox = document.querySelector(".chatbox");

let userMessage;

// ⚠️ IMPORTANT: Restrict API key in Google Cloud Console!
const API_KEY="AIzaSyB4R2Sk1iO0UQ8J_EUyqua-OvZ6oRlu1rw";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    let chatContent = className === "outgoing"
        ? `<p>${message}</p>`
        : `<span class="material-symbols-outlined">smart_toy</span> <p>${message}</p>`;

    chatLi.innerHTML = chatContent;
    return chatLi;
};

const generateResponse = async (incomingChatLi) => {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [
                {
                    role: "user",
                    parts: [{ text: userMessage }]
                }
            ]
        }),
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            messageElement.textContent = data.candidates[0].content.parts[0].text;
        } else {
            messageElement.textContent = "Oops! No response from AI. Try again.";
        }
    } catch (error) {
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }

    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const chatLi = createChatLi(userMessage, "outgoing");
    chatBox.appendChild(chatLi);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatBox.appendChild(incomingChatLi);
        chatBox.scrollTop = chatBox.scrollHeight;
        generateResponse(incomingChatLi);
    }, 600);

    chatInput.value = ""; // Clear input
};

sendChatBtn.addEventListener("click", handleChat);
