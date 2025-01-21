import React from 'react';
import { Wrench, Lightbulb, Shield, Receipt } from 'lucide-react';

const mockExpenses = [
  {
    id: '1',
    category: 'maintenance',
    description: 'Plumbing repair',
    amount: 450,
    date: '2024-02-28',
  },
  {
    id: '2',
    category: 'utilities',
    description: 'Electricity bill',
    amount: 850,
    date: '2024-03-01',
  },
  {
    id: '3',
    category: 'insurance',
    description: 'Property insurance',
    amount: 1200,
    date: '2024-03-05',
  },
];

const categoryIcons = {
  maintenance: <Wrench className="w-5 h-5 text-blue-500" />,
  utilities: <Lightbulb className="w-5 h-5 text-amber-500" />,
  insurance: <Shield className="w-5 h-5 text-emerald-500" />,
  other: <Receipt className="w-5 h-5 text-gray-500" />,
};

export function ExpensesList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockExpenses.map((expense) => (
        <div key={expense.id} className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              {categoryIcons[expense.category as keyof typeof categoryIcons]}
            </div>
            <div>
              <p className="font-medium text-gray-900">{expense.description}</p>
              <p className="text-sm text-gray-500">{expense.category}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-900">-${expense.amount}</p>
            <p className="text-sm text-gray-500">{expense.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}