import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  {
    category: 'Rent',
    'Your Properties': 2500,
    'Market Average': 2300,
  },
  {
    category: 'Occupancy',
    'Your Properties': 92,
    'Market Average': 88,
  },
  {
    category: 'Price/sqft',
    'Your Properties': 2.8,
    'Market Average': 2.5,
  },
  {
    category: 'Growth',
    'Your Properties': 5.2,
    'Market Average': 4.8,
  },
];

export function MarketComparison() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="category"
            tick={{ fill: '#6B7280' }}
            tickLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis
            tick={{ fill: '#6B7280' }}
            tickLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Legend />
          <Bar dataKey="Your Properties" fill="#3B82F6" />
          <Bar dataKey="Market Average" fill="#9CA3AF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}