import React, { useState } from "react";
import { API } from "./config/api";

function Form() {
  const [course, setCourse] = useState({
    title: "",
    fees: "",
    duration: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const createCourse = async (course) => {
    try {
      await API.post("/courses", course);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse(course);
    setCourse({ title: "", fees: "", duration: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={course.title}
        onChange={handleInput}
      />
      <input
        type="number"
        name="fees"
        placeholder="Fees"
        value={course.fees}
        onChange={handleInput}
      />
      <input
        type="number"
        name="duration"
        placeholder="Duration (months)"
        value={course.duration}
        onChange={handleInput}
      />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default Form;
