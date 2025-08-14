
import { CheckCircle,Activity } from 'lucide-react'
const Habits = ({habits,toggleHabit}) => {
  return (
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Habits
              </h2>
              <div className="space-y-3">
                {habits.map((habit) => (
                  <div key={habit.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {habit.name}
                      </span>
                      <button
                        onClick={() => toggleHabit(habit.id)}
                        className={`w-6 h-6 rounded-full ${
                          habit.completed ? "bg-green-500" : "bg-gray-300"
                        } transition-colors`}
                      >
                        {habit.completed && (
                          <CheckCircle className="h-4 w-4 text-white m-1" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Activity className="h-4 w-4" />
                      <span>
                        {habit.streak}/{habit.target} days
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(
                            100,
                            (habit.streak / habit.target) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Habits