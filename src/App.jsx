import { useState } from "react";

import "./App.css";
// Mock data - replace with Laravel API calls
import { weeklyData } from "./mockData";

import Tasks from "./components/Tasks";
import StatsCards from "./components/StatsCards";
import Habits from "./components/Habits";
import Header from "./components/Header";
import Expenses from "./components/Expenses";
import Chart from "./components/Chart";
import useTask from "./hooks/useTask";
import useStats from "./hooks/useStats";
export default function App() {
  const [newTask, setNewTask] = useState("");

  const {
    tasks,
    showAddTask,
    setShowAddTask,
    addTask,
    toggleTask,
    completedTasks,
  } = useTask(newTask, setNewTask);
  // Calculate stats
  const {
    expenses,
    habits,
    totalExpenses,
    avgHabitStreak,
    toggleHabit,
    addExpense,
  } = useStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header />
        {/* Stats Cards */}
        <StatsCards
          tasks={tasks}
          completedTasks={completedTasks}
          totalExpenses={totalExpenses}
          avgHabitStreak={avgHabitStreak}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tasks Section */}
          <div className="lg:col-span-2">
            <Tasks
              tasks={tasks}
              toggleTask={toggleTask}
              setShowAddTask={setShowAddTask}
              showAddTask={showAddTask}
              newTask={newTask}
              addTask={addTask}
              setNewTask={setNewTask}
            />

            {/* Charts */}
            <Chart weeklyData={weeklyData} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Habits Tracker */}
            <Habits habits={habits} toggleHabit={toggleHabit} />

            {/* Recent Expenses */}
            <Expenses expenses={expenses} onAddExpense={addExpense} />
          </div>
        </div>
      </div>
    </div>
  );
}
