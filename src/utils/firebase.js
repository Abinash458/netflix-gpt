// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvyrmOKHPYJl_kokIh1cF5FT33rrFRrWk",
  authDomain: "netflixgpt-dff8f.firebaseapp.com",
  projectId: "netflixgpt-dff8f",
  storageBucket: "netflixgpt-dff8f.firebasestorage.app",
  messagingSenderId: "631619437796",
  appId: "1:631619437796:web:38d5a3fcc5b8225d39d8f1",
  measurementId: "G-H3JSW9RTXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();