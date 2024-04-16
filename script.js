// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
const auth = firebase.auth();

auth.signInAnonymously()
    .catch(function(error) {
        console.error("Error signing in anonymously:", error);
    });

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message !== '') {
        database.collection('messages').add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth.currentUser.uid
        })
        .then(() => {
            messageInput.value = '';
        })
        .catch((error) => {
            console.error("Error sending message:", error);
        });
    }
}

database.collection('messages')
    .orderBy('timestamp')
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                const messageData = change.doc.data();
                const message = messageData.message;
                const uid = messageData.uid;
                const timestamp = messageData.timestamp.toDate();
                
                const chatBox = document.getElementById('chat-box');
                const messageElement = document.createElement('div');
                const timestampElement = document.createElement('div');
                
                messageElement.textContent = message;
                timestampElement.textContent = timestamp.toLocaleString();
                timestampElement.classList.add('timestamp');
                
                if (uid === auth.currentUser.uid) {
                    messageElement.classList.add('own-message');
                }
                
                messageElement.appendChild(timestampElement);
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    });
