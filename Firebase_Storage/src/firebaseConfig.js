// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjli0ROozE4dNAJVhH3qfSwMxQbmL0jM",
  authDomain: "storage-react-fb.firebaseapp.com",
  projectId: "storage-react-fb",
  storageBucket: "storage-react-fb.appspot.com", // ✅ Fixed `storageBucket`
  messagingSenderId: "900394958104",
  appId: "1:900394958104:web:ad060248c18a08a199f26d",
  measurementId: "G-MKS03C4W2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Export Firestore database
