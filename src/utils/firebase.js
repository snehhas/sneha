// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzmfryl2fSjbcUCYxXLFQXkv-uXH67e0",
  authDomain: "sneha-sunny-ba801.firebaseapp.com",
  projectId: "sneha-sunny-ba801",
  storageBucket: "sneha-sunny-ba801.appspot.com",
  messagingSenderId: "860769197160",
  appId: "1:860769197160:web:3c859ac14757dd6c48afdd",
  measurementId: "G-GLMQ5DCZC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);