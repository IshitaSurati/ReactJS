import React, { useEffect, useState } from "react";
import API from "../config/Api";

const QuestionBank = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get("/tests");
        setQuestions(res.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Question Bank</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <strong>Q:</strong> {q.question} <br />
            <strong>A:</strong> {q.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBank;
