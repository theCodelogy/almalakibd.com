// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZd0H4sa9WDYKo8ZzV8E6TSJEiLPLBhM0",
  authDomain: "almaleki-6a86e.firebaseapp.com",
  projectId: "almaleki-6a86e",
  storageBucket: "almaleki-6a86e.appspot.com",
  messagingSenderId: "998250594722",
  appId: "1:998250594722:web:094eb8e1d78f3489b7f2fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)