import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import QuizList from './components/QuizList';
import QuizAdd from './components/QuizAdd';
import Navbar from './components/Navbar'; 

const App = () => {
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));  // Retrieve admin status from localStorage 

  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      
      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quizzes" element={<QuizList />} />
          {isAdmin && <Route path="/add-quiz" element={<QuizAdd />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
