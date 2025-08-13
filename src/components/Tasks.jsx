import React from "react";
import { CheckCircle,Plus } from "lucide-react";
import AddTask from "./AddTask";
import OneTask from "./OneTask";
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
          <OneTask task={task} toggleTask={toggleTask}/>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tasks;
