import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quizzes')
      .then(response => setQuizzes(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="quiz-list">
      <h2>Quiz List</h2>
      {quizzes.map(quiz => (
        <div key={quiz._id} className="quiz-item">
          <h3>{quiz.title}</h3>
          <p>Created by: {quiz.createdBy.username}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
