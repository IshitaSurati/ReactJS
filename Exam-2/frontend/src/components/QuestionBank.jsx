import React, { useEffect, useState } from "react";
import API from "../config/Api";

const QuestionBank = () => {
  const [questions, setQuestions] = useState([]); // Stores fetched questions
  const [selectedQuestions, setSelectedQuestions] = useState([]); // Tracks selected questions

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get("/tests"); // Fetch questions
        setQuestions(res.data); // Set state with fetched questions
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  const addToExam = async (question) => {
    try {
      const res = await API.post("/exam-bank", question); // Add question to exam bank
      if (res.status === 201) {
        setSelectedQuestions([...selectedQuestions, question]); 
        alert("Question added to Exam Bank!");
      }
    } catch (err) {
      console.error("Error adding question to exam bank:", err);
    }
  };

  return (
    <div>
      <h2>Question Bank</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <strong>Q:</strong> {q.question} <br />
            <strong>A:</strong> {q.answer} <br />
            {!selectedQuestions.some((sq) => sq.id === q.id) && (
              <button onClick={() => addToExam(q)}>Add to Exam</button>
            )}
            {selectedQuestions.some((sq) => sq.id === q.id) && <span>Selected</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBank;
