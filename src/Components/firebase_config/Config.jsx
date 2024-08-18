
import { initializeApp } from "firebase/app";
import { getAuth,
 signInWithEmailAndPassword, 
 createUserWithEmailAndPassword,
 onAuthStateChanged,
 signOut
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH3K40o6CHOoyJXT-atcqBWGx24qrGTu4",
  authDomain: "auth-c945c.firebaseapp.com",
  projectId: "auth-c945c",
  storageBucket: "auth-c945c.appspot.com",
  messagingSenderId: "168143359575",
  appId: "1:168143359575:web:94c78c47e865a49fa39d12",
  measurementId: "G-2Q665YQ5L6"
};

// Initia
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged,signOut};
