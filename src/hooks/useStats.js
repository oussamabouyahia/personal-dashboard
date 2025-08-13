
import { useState } from "react";
import { mockExpenses,mockHabits } from "../mockData";
export default function useStats(){

const [expenses, setExpenses] = useState(mockExpenses);
  const [habits, setHabits] = useState(mockHabits);
const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const avgHabitStreak = Math.round(
    habits.reduce((sum, habit) => sum + habit.streak, 0) / habits.length
  );

  const toggleHabit = (id) => {
    setHabits(prev=>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: !habit.completed
                ? habit.streak + 1
                : Math.max(0, habit.streak - 1),
            }
          : habit
      )
    );
  };
  return {expenses,habits,totalExpenses,avgHabitStreak,toggleHabit}


}