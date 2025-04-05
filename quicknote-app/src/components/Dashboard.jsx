import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { setNotes } from '../redux/slices/noteSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const user = useSelector(state => state.auth.user);
  const [text, setText] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState('');

  const fetchNotes = async () => {
    if (!user) return;
    const q = query(collection(db, 'notes'), where('uid', '==', user.uid), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    dispatch(setNotes(data));
  };

  const addNote = async () => {
    if (!text || !user) return;
    await addDoc(collection(db, 'notes'), {
      text,
      uid: user.uid,
      createdAt: new Date()
    });
    setText('');
    fetchNotes();
  };

  const startEdit = (note) => {
    setEditMode(note.id);
    setEditText(note.text);
  };

  const saveEdit = async (id) => {
    await updateDoc(doc(db, 'notes', id), { text: editText });
    setEditMode(null);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
    fetchNotes();
  };

  useEffect(() => { fetchNotes(); }, [user]);

  return (
    <div className="dashboard">
      <h2>Your Notes</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a new note..."
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {editMode === note.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(note.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{note.text}</span>
                <button onClick={() => startEdit(note)}>Edit</button>
              </>
            )}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
