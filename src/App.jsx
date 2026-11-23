import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");

  function handleAddTask(newTask) {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function handleToggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleDeleteTask(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = totalTasks - completedTasks;

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "Semua" ||
      (filterStatus === "Selesai" && task.completed) ||
      (filterStatus === "Belum Selesai" && !task.completed);

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Header />

        <Summary
          total={totalTasks}
          pending={pendingTasks}
          completed={completedTasks}
        />

        <TaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
      </main>

      <footer className="footer" id="tentang">
        <p>© 2026 AktivitasKu - Arham Mahasin Khawwas</p>
        <p>NIM: 1247050016</p>
      </footer>
    </div>
  );
}

export default App;
