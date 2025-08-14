import OneHabit from "./OneHabit";
const Habits = ({ habits, toggleHabit }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Habits</h2>
      <div className="space-y-3">
        {habits.map((habit) => (
          <div key={habit.id} className="p-3 bg-gray-50 rounded-lg">
            <OneHabit habit={habit} toggleHabit={toggleHabit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habits;
