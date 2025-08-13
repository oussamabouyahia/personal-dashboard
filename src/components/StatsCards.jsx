import { CheckCircle, DollarSign, Target, TrendingUp } from "lucide-react";
const StatsCards = ({
  completedTasks,
  tasks,
  totalExpenses,
  avgHabitStreak,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
            <p className="text-2xl font-bold text-green-600">
              {completedTasks}/{tasks.length}
            </p>
          </div>
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Today's Expenses
            </p>
            <p className="text-2xl font-bold text-red-600">
              ${totalExpenses.toFixed(2)}
            </p>
          </div>
          <DollarSign className="h-8 w-8 text-red-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Avg Habit Streak
            </p>
            <p className="text-2xl font-bold text-purple-600">
              {avgHabitStreak} days
            </p>
          </div>
          <Target className="h-8 w-8 text-purple-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Productivity</p>
            <p className="text-2xl font-bold text-blue-600">85%</p>
          </div>
          <TrendingUp className="h-8 w-8 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
