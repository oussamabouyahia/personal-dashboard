export const mockTasks = [
  {
    id: 1,
    title: "Review project proposals",
    completed: true,
    priority: "medium",
    dueDate: "2025-08-13",
  },
  {
    id: 2,
    title: "use domain driven architecture",
    completed: false,
    priority: "high",
    dueDate: "2025-08-15",
  },
  {
    id: 3,
    title: "legacy from Vue to React",
    completed: false,
    priority: "low",
    dueDate: "2025-08-20",
  },
];

export const mockExpenses = [
  { id: 1, category: "Food", amount: 45.5, date: "2025-01-01" },
  { id: 2, category: "Transport", amount: 12.0, date: "2024-05-13" },
  { id: 3, category: "Software", amount: 29.99, date: "2025-08-12" },
];

export const mockHabits = [
  { id: 1, name: "Refactore code", streak: 5, target: 7, completed: true },
  {
    id: 2,
    name: "Reading from Medium",
    streak: 3,
    target: 7,
    completed: false,
  },
  { id: 3, name: "problem Solving", streak: 12, target: 7, completed: true },
];
export const weeklyData = [
  { name: "Mon", tasks: 4, expenses: 45 },
  { name: "Tue", tasks: 3, expenses: 32 },
  { name: "Wed", tasks: 5, expenses: 28 },
  { name: "Thu", tasks: 4, expenses: 55 },
  { name: "Fri", tasks: 6, expenses: 42 },
  { name: "Sat", tasks: 2, expenses: 78 },
  { name: "Sun", tasks: 3, expenses: 35 },
];
