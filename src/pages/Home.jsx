import React, { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <div className="stats">
        <span>Total: {tasks.length}</span>
        <span>
          Completed: {tasks.filter(t => t.status === "Completed").length}
        </span>
      </div>

      <TaskForm onTaskAdded={loadTasks} />

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>

      <TaskList tasks={filteredTasks} onChange={loadTasks} />
    </div>
  );
};

export default Home;
