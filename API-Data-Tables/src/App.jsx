import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:5000/students"; 

const StudentMarksheet = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ name: "", roll: "", marks: "" });

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setStudents(data.slice(0, 10))) // Fetch initial data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleAddStudent = () => {
    if (student.name && student.roll && student.marks) {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      })
        .then((response) => response.json())
        .then((newStudent) => setStudents([...students, newStudent]))
        .catch((error) => console.error("Error adding student:", error));

      setStudent({ name: "", roll: "", marks: "" });
    }
  };

  return (
    <div className="container py-5" style={{ backgroundColor: "#f3f4f6" }}>
      <h2 className="text-center text-primary">Student Marksheet</h2>
      
      {/* Form Section */}
      <div className="card p-3 mb-4">
        <h4 className="text-secondary">Enter Student Details</h4>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Student Name"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Roll Number"
            name="roll"
            value={student.roll}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Marks"
            name="marks"
            value={student.marks}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" onClick={handleAddStudent}>Add Student</button>
      </div>
      
      {/* Table Section */}
      <div className="card p-3">
        <h4 className="text-secondary">Student Records</h4>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, index) => (
              <tr key={index}>
                <td>{s.name || `Student ${index + 1}`}</td>
                <td>{s.roll || `Roll ${index + 1}`}</td>
                <td>{s.marks || Math.floor(Math.random() * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentMarksheet;
