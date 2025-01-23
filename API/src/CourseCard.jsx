import React from "react";

const CourseCard = ({ title, fees, duration, onDelete, id }) => {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Fees: ${fees}</p>
      <p>Duration: {duration} months</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default CourseCard;
