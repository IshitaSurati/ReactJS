import React, { useEffect, useState } from "react";
import { API } from "./config/api";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [data, setData] = useState([]);

  const getCourses = async () => {
    try {
      const res = await API.get("/courses");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/courses/${id}`);
      getCourses(); // Refresh data after delete
    } catch (error) {
      console.error("Couldn't delete course:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []); 

  return (
    <div>
      {data.map((course) => (
        <CourseCard key={course.id} {...course} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Courses;
