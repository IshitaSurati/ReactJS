// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3agIeLm-Ng3GQtGItWAcqavvMC22sMhg",
  authDomain: "fb-dbnauth-redux.firebaseapp.com",
  projectId: "fb-dbnauth-redux",
  storageBucket: "fb-dbnauth-redux.firebasestorage.app",
  messagingSenderId: "295710839534",
  appId: "1:295710839534:web:015bf7c9684fc29ebc59ff",
  measurementId: "G-CF4ZJTVGYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);