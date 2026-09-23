// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP7MMYiSyhfs9rngXFhs03uvwzvrXmq50",
  authDomain: "cortex-3c144.firebaseapp.com",
  projectId: "cortex-3c144",
  storageBucket: "cortex-3c144.firebasestorage.app",
  messagingSenderId: "301744682859",
  appId: "1:301744682859:web:7cba4734365ba65760be2e",
  measurementId: "G-WEMDHBTFVC",
};

export const App = initializeApp(firebaseConfig);

export const auth = getAuth(App);

export const db = getFirestore(App);
