// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDX8LGo9VS0fxTfDKtMHB-X2fMWau3uOAA",
  authDomain: "sigmamandi.firebaseapp.com",
  projectId: "sigmamandi",
  storageBucket: "sigmamandi.appspot.com",
  messagingSenderId: "1073586124748",
  appId: "1:1073586124748:web:1468b3a513eebec3474f69",
  measurementId: "G-GZ4V7H1FPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { app, auth, provider };