import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

const mockPayments = [
  {
    id: '1',
    tenant: 'John Smith',
    unit: 'A101',
    amount: 1500,
    status: 'completed',
    date: '2024-03-01',
  },
  {
    id: '2',
    tenant: 'Sarah Johnson',
    unit: 'B205',
    amount: 1800,
    status: 'pending',
    date: '2024-03-05',
  },
  {
    id: '3',
    tenant: 'Michael Brown',
    unit: 'C304',
    amount: 2000,
    status: 'failed',
    date: '2024-02-28',
  },
];

const statusIcons = {
  completed: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
  pending: <Clock className="w-5 h-5 text-amber-500" />,
  failed: <XCircle className="w-5 h-5 text-rose-500" />,
};

export function PaymentsList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockPayments.map((payment) => (
        <div key={payment.id} className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              {statusIcons[payment.status as keyof typeof statusIcons]}
            </div>
            <div>
              <p className="font-medium text-gray-900">{payment.tenant}</p>
              <p className="text-sm text-gray-500">Unit {payment.unit}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-900">${payment.amount}</p>
            <p className="text-sm text-gray-500">{payment.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}