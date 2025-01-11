import React from "react";

const TodoItem = ({
  task,
  date,
  isCompleted,
  id,
  onDelete,
  onStatusUpdate,
  onUpdate,
}) => {
  const handleUpdate = () => {
    onUpdate({ task, date, isCompleted, id });
  };

  return (
    <div>
      <h3>{task}</h3>
      <p>due:{date}</p>
      <button onClick={() => onStatusUpdate(id)}>
        {isCompleted ? "mark as  pending" : "mark as complete"}
      </button>
      <button onClick={handleUpdate}>update</button>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default TodoItem;