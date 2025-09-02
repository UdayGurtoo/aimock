// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG9Fq-rnEXc1Krttm0FoNQVgdb3yd-XhE",
  authDomain: "prepwise-bec89.firebaseapp.com",
  projectId: "prepwise-bec89",
  storageBucket: "prepwise-bec89.firebasestorage.app",
  messagingSenderId: "128880879904",
  appId: "1:128880879904:web:9bf3ea8782f60de1bd8f45",
  measurementId: "G-L8HQG4JRKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);