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

// Initialize Firestore
const firestore = firebase.firestore();

// DOM elements
const profilePicture = document.getElementById("profile-picture");
const photoInput = document.getElementById("photo-input");
const usernameInput = document.getElementById("username-input");
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
    // Update user profile in Firestore
    // For example: firestore.collection("users").doc(userId).set({ username, bio });
});

// Upload photo
function uploadPhoto() {
    photoInput.click();
}

// Send message
sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
        // Send message to Firestore
        // For example: firestore.collection("messages").add({ senderId, message });
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

// Listen for new messages from Firestore
firestore.collection("messages").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        const message = doc.data().message;
        // Display message in the message history
    });
});

// Listen for user profile updates from Firestore
// For example: firestore.collection("users").doc(userId).onSnapshot((doc) => {
//     const user = doc.data();
//     // Update profile information
// });

// Listen for profile clicks
messageHistory.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("username")) {
        const username = target.textContent;
        // Display user profile
        // For example: firestore.collection("users").where("username", "==", username).get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         const user = doc.data();
        //         // Show user profile
        //     });
        // });
    }
});
