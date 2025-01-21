import React from 'react';
import { BarChart3, TrendingUp, DollarSign, PieChart, Download } from 'lucide-react';
import { PerformanceMetrics } from './PerformanceMetrics';
import { FinancialChart } from './FinancialChart';
import { OccupancyTrend } from './OccupancyTrend';
import { MarketComparison } from './MarketComparison';
import { ReportsList } from './ReportsList';
import type { FinancialMetrics } from '../../types/analytics';

const mockFinancialMetrics: FinancialMetrics = {
  revenue: {
    current: 45000,
    previous: 42000,
    trend: 7.14
  },
  expenses: {
    current: 15000,
    previous: 16000,
    trend: -6.25
  },
  occupancy: {
    current: 92,
    previous: 88,
    trend: 4.55
  },
  maintenance: {
    current: 8,
    previous: 12,
    trend: -33.33
  }
};

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your property performance and market insights
          </p>
        </div>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 12 Months</option>
            <option>Year to Date</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PerformanceMetrics
          title="Total Revenue"
          current={mockFinancialMetrics.revenue.current}
          previous={mockFinancialMetrics.revenue.previous}
          trend={mockFinancialMetrics.revenue.trend}
          icon={<DollarSign className="w-5 h-5" />}
          format="currency"
        />
        <PerformanceMetrics
          title="Total Expenses"
          current={mockFinancialMetrics.expenses.current}
          previous={mockFinancialMetrics.expenses.previous}
          trend={mockFinancialMetrics.expenses.trend}
          icon={<BarChart3 className="w-5 h-5" />}
          format="currency"
        />
        <PerformanceMetrics
          title="Occupancy Rate"
          current={mockFinancialMetrics.occupancy.current}
          previous={mockFinancialMetrics.occupancy.previous}
          trend={mockFinancialMetrics.occupancy.trend}
          icon={<PieChart className="w-5 h-5" />}
          format="percentage"
        />
        <PerformanceMetrics
          title="Maintenance Requests"
          current={mockFinancialMetrics.maintenance.current}
          previous={mockFinancialMetrics.maintenance.previous}
          trend={mockFinancialMetrics.maintenance.trend}
          icon={<TrendingUp className="w-5 h-5" />}
          format="number"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Financial Performance</h2>
          <FinancialChart />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Occupancy Trend</h2>
          <OccupancyTrend />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Market Comparison</h2>
          <MarketComparison />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Reports</h2>
            <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
          </div>
          <ReportsList />
        </div>
      </div>
    </div>
  );
}