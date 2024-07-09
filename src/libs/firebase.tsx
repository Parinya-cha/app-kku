// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT59URwNpKfq6RixgT7rmFLBrA-shpu3s",
  authDomain: "kku-smart-d5e2a.firebaseapp.com",
  projectId: "kku-smart-d5e2a",
  storageBucket: "kku-smart-d5e2a.appspot.com",
  messagingSenderId: "97325843020",
  appId: "1:97325843020:web:c8c11ba6c416b8e6e6aae9",
  measurementId: "G-B56KFP1YKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;