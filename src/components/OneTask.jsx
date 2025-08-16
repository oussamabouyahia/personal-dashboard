import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
const OneTask = ({ task, toggleTask, handlePriority }) => {
  return (
    <>
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
      <select
        name=""
        id=""
        value={task.priority}
        onChange={(e) => {
          handlePriority(task.id, e.target.value);
        }}
        className={`px-2 py-1 rounded text-xs font-medium ${
          task.priority === "high"
            ? "bg-red-100 text-red-800"
            : task.priority === "medium"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        <option
          value="high"
          className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 "
        >
          high
        </option>
        <option
          value="medium"
          className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800"
        >
          medium
        </option>
        <option
          value="low"
          className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800"
        >
          low
        </option>
      </select>
    </>
  );
};

export default OneTask;
