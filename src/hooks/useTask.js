import { useState } from "react";
import { mockTasks} from "../mockData"


export default function useTask(newTask,setNewTask){

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
   const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

return {tasks,setTasks,showAddTask,setShowAddTask,addTask,toggleTask}

}