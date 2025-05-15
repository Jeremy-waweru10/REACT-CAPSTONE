// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1O84UmS4Ir0bO89SwGCP84g8V82ytOs4",
  authDomain: "react-capstone-803d5.firebaseapp.com",
  projectId: "react-capstone-803d5",
  storageBucket: "react-capstone-803d5.firebasestorage.app",
  messagingSenderId: "974743118367",
  appId: "1:974743118367:web:93aae1e9aababfe367ab2a",
  measurementId: "G-H9S4RDXX2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { app, auth, analytics };