import { useState } from "react";
import { Plus } from "lucide-react";
import AddExpense from "./AddExpense";

export default function Expenses({ expenses, onAddExpense }) {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent Expenses</h2>
        <button
          onClick={() => setShowAdd((s) => !s)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <Plus className="h-4 w-4" /> Add Expenses
        </button>
      </div>

      {showAdd && (
        <AddExpense
          onAdd={(exp) => {
            onAddExpense(exp);
            setShowAdd(false);
          }}
          onCancel={() => setShowAdd(false)}
        />
      )}

      <div className="space-y-3">
        {expenses.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <span className="font-medium text-gray-900">{exp.category}</span>
              <p className="text-sm text-gray-600">{exp.date}</p>
            </div>
            <span className="font-bold text-red-600">
              ${Number(exp.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
