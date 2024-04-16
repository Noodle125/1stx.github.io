// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlLRg-irrAb1RNC-zvWWkb79GWqLe0XDc",
    authDomain: "stx-373b2.firebaseapp.com",
    databaseURL: "https://stx-373b2-default-rtdb.firebaseio.com",
    projectId: "stx-373b2",
    storageBucket: "stx-373b2.appspot.com",
    messagingSenderId: "714624842537",
    appId: "1:714624842537:web:54fc08b0fdbd6226e1d538"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
const database = firebase.database();

document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username-input");
    const messageInput = document.getElementById("message-input");
    const submitButton = document.getElementById("submit-button");
    const chatMessages = document.getElementById("chat-messages");
    const radioPlayer = document.getElementById("radio-player");
    const radioTitle = document.getElementById("radio-title");

    // Function to add a message to the chat
    function addMessage(username, message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = username + ": " + message;
        chatMessages.appendChild(messageElement);
    }

    // Event listener for the submit button
    submitButton.addEventListener("click", function() {
        const username = usernameInput.value.trim();
        const messageText = messageInput.value.trim();
        if (username !== "" && messageText !== "") {
            // Store message in Firebase Realtime Database
            database.ref("messages").push().set({
                username: username,
                message: messageText
            });
            messageInput.value = ""; // Clear message input
        }
    });

    // Load existing messages from Firebase Realtime Database
    database.ref("messages").on("child_added", function(snapshot) {
        const messageData = snapshot.val();
        const username = messageData.username;
        const message = messageData.message;
        addMessage(username, message);
    });

    // Get radio stream URL from Firebase
    const radioStreamRef = database.ref("radioStream");
    radioStreamRef.once("value", function(snapshot) {
        const radioStreamUrl = snapshot.val();
        if (radioStreamUrl) {
            // Update audio player source with radio stream URL
            radioPlayer.src = https://firebasestorage.googleapis.com/v0/b/ndx-b1e1d.appspot.com/o/Musical%20Students%20-%20%20%20%20G%20Latt%20selection%20songs.mp3?alt=media&token=8b42c42b-351c-44b4-b834-896aea500571;
        }
    });

    // Toggle Radio Functionality
    const toggleButton = document.getElementById("toggle-button");
    toggleButton.addEventListener("click", function() {
        if (radioPlayer.paused) {
            radioPlayer.play(); // Start playback
            toggleButton.textContent = "Pause Radio";
        } else {
            radioPlayer.pause(); // Pause playback
            toggleButton.textContent = "Play Radio";
        }
    });

    // Update Radio Title Functionality
    radioTitle.addEventListener("mouseover", function() {
        radioTitle.stop();
    });
});
