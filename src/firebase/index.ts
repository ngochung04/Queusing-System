// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOS6SYOi1aHA7qAXHe6Ssii4lSlBYj7E4",
  authDomain: "system-fb24d.firebaseapp.com",
  projectId: "system-fb24d",
  storageBucket: "system-fb24d.appspot.com",
  messagingSenderId: "688350164800",
  appId: "1:688350164800:web:dfb7e1b750f8b6e9d72ca5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
