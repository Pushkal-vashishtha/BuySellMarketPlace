// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbpFQrdvTwqMvK6YYPhYR3htg_M4AbipU",
  authDomain: "market-4b588.firebaseapp.com",
  projectId: "market-4b588",
  storageBucket: "market-4b588.appspot.com",
  messagingSenderId: "433452655175",
  appId: "1:433452655175:web:962d738b2775c535e2c762",
  measurementId: "G-BC1DS4L7GL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);