import React from 'react';
import { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PerformanceMetricsProps {
  title: string;
  current: number;
  previous: number;
  trend: number;
  icon: ReactNode;
  format: 'currency' | 'percentage' | 'number';
}

export function PerformanceMetrics({
  title,
  current,
  previous,
  trend,
  icon,
  format
}: PerformanceMetricsProps) {
  const formatValue = (value: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(value);
      case 'percentage':
        return `${value}%`;
      default:
        return value.toLocaleString();
    }
  };

  const isPositive = trend > 0;
  const trendColor = isPositive ? 'text-emerald-600' : 'text-rose-600';
  const trendBg = isPositive ? 'bg-emerald-50' : 'bg-rose-50';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
          {icon}
        </div>
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full ${trendBg} ${trendColor} text-sm font-medium`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {Math.abs(trend)}%
        </div>
      </div>
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <div className="space-y-1">
        <p className="text-2xl font-semibold">{formatValue(current)}</p>
        <p className="text-sm text-gray-500">
          vs {formatValue(previous)} last period
        </p>
      </div>
    </div>
  );
}