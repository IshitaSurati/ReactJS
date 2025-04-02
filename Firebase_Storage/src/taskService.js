import { db } from "./firebaseConfig"; // ✅ Import Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Fetch all tasks from Firestore
export const fetchTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

// Add a new task to Firestore
export const addTask = async (text) => {
  try {
    await addDoc(collection(db, "tasks"), { text });
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// Update an existing task in Firestore
export const updateTask = async (id, newText) => {
  try {
    await updateDoc(doc(db, "tasks", id), { text: newText });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

// Delete a task from Firestore
export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
