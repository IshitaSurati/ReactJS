import { auth } from "../src/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const handleSignup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const handleLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const handleLogout = () => signOut(auth);