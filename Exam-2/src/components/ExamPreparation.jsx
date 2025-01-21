import React, { useEffect, useState } from "react";
import API from "../config/Api";

const ExamPreparation = () => {
  const [examQuestions, setExamQuestions] = useState([]);
  const [examDetails, setExamDetails] = useState({
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    const fetchExamQuestions = async () => {
      const res = await API.get("/exam-bank");
      setExamQuestions(res.data); 
    };
    fetchExamQuestions();
  }, []);

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setExamDetails({
      ...examDetails,
      [name]: value,
    });
  };

  const saveExamDetails = async () => {
    const res = await API.post("/exam-details", examDetails); 
    if (res.status === 200) {
      alert("Exam details saved successfully!");
    }
  };

  return (
    <div>
      <h2>Exam Preparation</h2>
      <form>
      <div>
        <label>Start Time:</label>
        <input
          type="datetime-local"
          name="startTime"
          value={examDetails.startTime}
          onChange={handleTimeChange}
        />
        <br />
        <label>End Time:</label>
        <input
          type="datetime-local"
          name="endTime"
          value={examDetails.endTime}
          onChange={handleTimeChange}
        />
        <br />
        <button onClick={saveExamDetails}>Save Exam</button>
      </div>
      </form>
      <h3>Selected Questions:</h3>
      <ul>
        {examQuestions.map((q, index) => (
          <li key={index}>
            <strong>Q:</strong> {q.question} <br />
            <strong>A:</strong> {q.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamPreparation;
