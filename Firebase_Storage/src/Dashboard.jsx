import React, { useEffect, useState } from "react";
import { handleLogout } from "./auth";
import { fetchTasks, addTask, updateTask, deleteTask } from "./taskService";

const Dashboard = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold">Task Dashboard</h1>
      <button className="bg-red-500 text-white px-4 py-2 mt-2" onClick={handleLogout}>Logout</button>
      <div className="mt-4">
        <input className="border p-2" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
        <button className="bg-blue-500 text-white px-4 py-2 ml-2" onClick={() => addTask(task).then(() => fetchTasks().then(setTasks))}>Add Task</button>
      </div>
      <ul className="mt-4">
        {tasks.map((t) => (
          <li key={t.id} className="border p-2 mt-2 flex justify-between">
            <input className="border p-1" value={t.text} onChange={(e) => updateTask(t.id, e.target.value).then(() => fetchTasks().then(setTasks))} />
            <button className="bg-red-500 text-white px-2" onClick={() => deleteTask(t.id).then(() => fetchTasks().then(setTasks))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;