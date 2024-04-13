// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlLRg-irrAb1RNC-zvWWkb79GWqLe0XDc",
  authDomain: "stx-373b2.firebaseapp.com",
  databaseURL: "https://stx-373b2-default-rtdb.firebaseio.com",
  projectId: "stx-373b2",
  storageBucket: "stx-373b2.appspot.com",
  messagingSenderId: "714624842537",
  appId: "1:714624842537:web:d7eca613ddd9196fe1d538"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
const database = firebase.database();

// DOM elements
const usernameInput = document.getElementById("username-input");
const uploadPhotoButton = document.getElementById("upload-photo");
const photoInput = document.getElementById("photo-input");
const bioInput = document.getElementById("bio-input");
const updateProfileButton = document.getElementById("update-profile");
const messageHistory = document.getElementById("message-history");
const messageInput = document.getElementById("message-input");
const fileInput = document.getElementById("file-input");
const sendButton = document.getElementById("send-message");
const chooseFileButton = document.getElementById("choose-file");

// Update profile
updateProfileButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const bio = bioInput.value.trim();
    // Update user profile in the database
    // For example: database.ref("users").child(userId).set({ username, bio });
});

// Upload photo
uploadPhotoButton.addEventListener("click", () => {
    photoInput.click();
});

// Send message
sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
        // Send message to the database
        // For example: database.ref("messages").push({ senderId, message });
        messageInput.value = "";
    }
});

// Choose file
chooseFileButton.addEventListener("click", () => {
    fileInput.click();
});

// Handle file selection
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
        // Handle file upload
    }
});

// Listen for new messages from the database
database.ref("messages").on("child_added", (snapshot) => {
    const message = snapshot.val();
    // Display message in the message history
});

// Listen for user profile updates from the database
// For example: database.ref("users").child(userId).on("value", (snapshot) => {
//     const user = snapshot.val();
//     // Update profile information
// });

// Listen for profile clicks
messageHistory.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("username")) {
        const username = target.textContent;
        // Display user profile
        // For example: database.ref("users").orderByChild("username").equalTo(username).once("value", (snapshot) => {
        //     const user = snapshot.val();
        //     // Show user profile
        // });
    }
});
