import React, { useState } from "react";
import API from "../config/Api";

const Form = () => {
  const [formData, setFormdata] = useState({
    question: "",
    answer: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const createformData = async (formData) => {
    try {
      let res = await API.post("/tests", formData);
      if (res.status === 201) {
        alert("Question added successfully!");
      }
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.question.trim() && formData.answer.trim()) {
      createformData(formData); // Send formData to the backend
      setFormdata({ question: "", answer: "" }); // Reset form fields
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Answer:</label>
        <input
          type="text"
          name="answer"
          value={formData.answer}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
