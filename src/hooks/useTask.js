import { useState, useMemo } from "react";
import { mockTasks } from "../mockData";

export default function useTask(newTask, setNewTask) {
  const [tasks, setTasks] = useState(mockTasks);
  const [showAddTask, setShowAddTask] = useState(false);
  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: "medium",
        dueDate: new Date().toISOString().split("T")[0],
      };
      setTasks([...tasks, task]);
      setNewTask("");
      setShowAddTask(false);
    }
  };
  const handlePriority = (id, priority) => {
    setTasks((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, priority: priority } : task;
      })
    );
  };
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const completedTasks = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );

  return {
    tasks,
    setTasks,
    showAddTask,
    setShowAddTask,
    addTask,
    toggleTask,
    completedTasks,
    handlePriority,
  };
}
