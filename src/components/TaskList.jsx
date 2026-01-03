import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onChange }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onChange={onChange} />
      ))}
    </div>
  );
};

export default TaskList;
