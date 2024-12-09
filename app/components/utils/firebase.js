// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBvmCoM5cbpWXwsNnbhyfzqQpTTZEf5xA",
  authDomain: "webdevproj-45340.firebaseapp.com",
  projectId: "webdevproj-45340",
  storageBucket: "webdevproj-45340.firebasestorage.app",
  messagingSenderId: "603104668064",
  appId: "1:603104668064:web:bf5883fd9cec748cb55cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);