import {useState} from 'react'

const AddTask = ({addTask,setShowAddTask,newTask,setNewTask}) => {
      

  return (
     <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  />
                  <div className="flex gap-2 mt-2">
                    <button onClick={addTask} className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                      Save
                    </button>
                    <button onClick={() => setShowAddTask(false)} className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">
                      Cancel
                    </button>
                  </div>
                </div>
  )
}

export default AddTask