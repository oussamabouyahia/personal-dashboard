import { useMemo, useState } from "react";
import { mockExpenses, mockHabits } from "../mockData";

export default function useStats() {
  const [expenses, setExpenses] = useState(mockExpenses);
  const [habits, setHabits] = useState(mockHabits);

  const addExpense = ({ category, amount, date, note }) => {
    if (!category || !amount || Number(amount) <= 0) return;
    setExpenses((prev) => [
      ...prev,
      {
        id: (crypto.randomUUID?.() ?? Date.now()).toString(),
        category,
        amount: Number(amount),
        date,
        note: note?.trim() || "",
      },
    ]);
  };

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              completed: !h.completed,
              streak: !h.completed ? h.streak + 1 : Math.max(0, h.streak - 1),
            }
          : h
      )
    );
  };

  const totalExpenses = useMemo(
    () => expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0),
    [expenses]
  );

  const avgHabitStreak = useMemo(
    () =>
      Math.round(
        habits.reduce((sum, h) => sum + h.streak, 0) / (habits.length || 1)
      ),
    [habits]
  );

  return {
    expenses,
    habits,
    totalExpenses,
    avgHabitStreak,
    addExpense,
    toggleHabit,
  };
}
