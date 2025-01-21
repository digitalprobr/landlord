import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { FinancialSummaryCard } from './FinancialSummaryCard';
import { PaymentsList } from './PaymentsList';
import { ExpensesList } from './ExpensesList';

export function FinancialDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FinancialSummaryCard
          title="Total Revenue"
          amount={25000}
          trend={+8.2}
          icon={<DollarSign className="w-6 h-6" />}
          color="emerald"
        />
        <FinancialSummaryCard
          title="Total Expenses"
          amount={8500}
          trend={-2.4}
          icon={<TrendingDown className="w-6 h-6" />}
          color="rose"
        />
        <FinancialSummaryCard
          title="Net Income"
          amount={16500}
          trend={+12.5}
          icon={<TrendingUp className="w-6 h-6" />}
          color="blue"
        />
        <FinancialSummaryCard
          title="Due This Month"
          amount={12000}
          icon={<Calendar className="w-6 h-6" />}
          color="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Recent Payments</h2>
          <PaymentsList />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Recent Expenses</h2>
          <ExpensesList />
        </div>
      </div>
    </div>
  );
}