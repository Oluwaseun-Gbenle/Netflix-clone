import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA012PqtXS6-nOP6SxiVT1FsntUE0etymA",
  authDomain: "netflix-clone-1b01a.firebaseapp.com",
  projectId: "netflix-clone-1b01a",
  storageBucket: "netflix-clone-1b01a.appspot.com",
  messagingSenderId: "802057866081",
  appId: "1:802057866081:web:6ff90e9e1b4e3c84461320",
  measurementId: "G-LBW8D529RS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();



export { auth };
export default db;