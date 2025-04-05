import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
  };

  return user ? (
    <nav className="navbar">
      <h3>Welcome, {user.email}</h3>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  ) : null;
};

export default Navbar;
