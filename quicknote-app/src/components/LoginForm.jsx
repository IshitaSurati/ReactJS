import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/formStyles.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registering, setRegistering] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(res.user));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(setUser(res.user));
  };

  const handleGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    dispatch(setUser(res.user));
  };

  return (
    <form id="Login" onSubmit={registering ? handleRegister : handleLogin}>
      <h2>{registering ? 'Register' : 'Login'}</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">{registering ? 'Register' : 'Login'}</button>
      <button type="button" onClick={() => setRegistering(!registering)}>
        {registering ? 'Already have an account?' : 'Need to register?'}
      </button>
      <button type="button" onClick={handleGoogle}>Sign in with Google</button>
    </form>
  );
};

export default LoginForm;

