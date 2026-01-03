import React from "react";
import { deleteTask, updateTask } from "../api/taskApi";

const TaskItem = ({ task, onChange }) => {
  const toggleStatus = async () => {
    const newStatus = task.status === "Pending" ? "Completed" : "Pending";
    await updateTask(task._id, { status: newStatus });
    onChange();
  };

  const removeTask = async () => {
    await deleteTask(task._id);
    onChange();
  };

  return (
    <div className={`task ${task.status === "Completed" ? "completed" : ""}`}>
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <small>Due: {new Date(task.dueDate).toLocaleDateString()}</small>
      </div>

      <div className="actions">
        <input
          type="checkbox"
          checked={task.status === "Completed"}
          onChange={toggleStatus}
        />
        <button onClick={removeTask}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
