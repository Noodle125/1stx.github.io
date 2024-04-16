// Your Firebase configuration
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
