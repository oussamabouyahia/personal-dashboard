import React from "react";
import { CheckCircle,Plus } from "lucide-react";
import AddTask from "./AddTask";
const Tasks = ({ tasks, toggleTask ,setShowAddTask,showAddTask,addTask,newTask,setNewTask}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
              <div className="space-y-3">
       <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">
                        Recent Tasks
                      </h2>
                      <button
                        onClick={() => setShowAddTask(!showAddTask)}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        Add Task
                      </button>
                    </div>
      
                    {showAddTask && (
                      <AddTask
                        setShowAddTask={setShowAddTask}
                        addTask={addTask}
                        newTask={newTask}
                        setNewTask={setNewTask}
                      />
                    )}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
        >
          <button
            onClick={() => toggleTask(task.id)}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              task.completed
                ? "bg-green-500 border-green-500"
                : "border-gray-300 hover:border-green-400"
            }`}
          >
            {task.completed && <CheckCircle className="h-3 w-3 text-white" />}
          </button>
          <span
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {task.title}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              task.priority === "high"
                ? "bg-red-100 text-red-800"
                : task.priority === "medium"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {task.priority}
          </span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tasks;
