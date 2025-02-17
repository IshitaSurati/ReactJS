import React, { useState } from 'react';
import axios from 'axios';

const QuizAdd = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/quizzes', { title, questions: questions.split('\n') }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setMessage('Quiz added successfully!');
    } catch (error) {
      setMessage('Error adding quiz');
    }
  };

  return (
    <div className="quiz-add">
      <h2>Add New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Quiz Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Enter questions (one per line)" value={questions} onChange={(e) => setQuestions(e.target.value)} />
        <button type="submit">Add Quiz</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default QuizAdd;
