import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyCI94fISn9LNwNYjLMgaOrG9b542KpUFeE",
  authDomain: "project-71-62774.firebaseapp.com",
  projectId: "project-71-62774",
  storageBucket: "project-71-62774.appspot.com",
  messagingSenderId: "516195402140",
  appId: "1:516195402140:web:27003eb7d2076b36e08859"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

  export default firebase.firestore()

