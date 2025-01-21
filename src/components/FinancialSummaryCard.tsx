import React from 'react';
import { ReactNode } from 'react';

interface FinancialSummaryCardProps {
  title: string;
  amount: number;
  trend?: number;
  icon: ReactNode;
  color: 'emerald' | 'rose' | 'blue' | 'amber';
}

const colorClasses = {
  emerald: 'bg-emerald-50 text-emerald-600',
  rose: 'bg-rose-50 text-rose-600',
  blue: 'bg-blue-50 text-blue-600',
  amber: 'bg-amber-50 text-amber-600',
};

export function FinancialSummaryCard({ title, amount, trend, icon, color }: FinancialSummaryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          {icon}
        </div>
        {trend !== undefined && (
          <span className={`text-sm font-medium ${trend >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-semibold">
        ${amount.toLocaleString()}
      </p>
    </div>
  );
}