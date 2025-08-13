import React from 'react'

const Expenses = ({expenses}) => {
  return (
     <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Recent Expenses
              </h2>
              <div className="space-y-3">
                {expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-gray-900">
                        {expense.category}
                      </span>
                      <p className="text-sm text-gray-600">{expense.date}</p>
                    </div>
                    <span className="font-bold text-red-600">
                      ${expense.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Expenses