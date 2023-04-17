// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3YjVKFP9P_cql1YWzIHcPlTR4wYADcYg",
  authDomain: "maddy-chat-app.firebaseapp.com",
  projectId: "maddy-chat-app",
  storageBucket: "maddy-chat-app.appspot.com",
  messagingSenderId: "341236898220",
  appId: "1:341236898220:web:5334cd93c0a18867a88209",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();
export const db = getFirestore(app);
