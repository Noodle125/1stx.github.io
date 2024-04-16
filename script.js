// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmNV47sId0qdGDiWvl6awe1_5PSRncjM",
  authDomain: "ndx-b1e1d.firebaseapp.com",
  databaseURL: "https://ndx-b1e1d-default-rtdb.firebaseio.com",
  projectId: "ndx-b1e1d",
  storageBucket: "ndx-b1e1d.appspot.com",
  messagingSenderId: "512322480998",
  appId: "1:512322480998:web:d8d8948413e254f330f6a7"
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
            radioPlayer.src = radioStreamUrl;
        }
    });
});
