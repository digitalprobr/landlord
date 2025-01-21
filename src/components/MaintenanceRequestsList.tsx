import React from 'react';
import { AlertTriangle, Clock, CheckCircle2, MoreVertical } from 'lucide-react';

const mockRequests = [
  {
    id: '1',
    title: 'Leaking Faucet',
    unit: 'A101',
    priority: 'high',
    status: 'new',
    submittedAt: '2024-03-10',
  },
  {
    id: '2',
    title: 'AC Not Cooling',
    unit: 'B205',
    priority: 'medium',
    status: 'in_progress',
    submittedAt: '2024-03-09',
  },
  {
    id: '3',
    title: 'Light Fixture Replacement',
    unit: 'C304',
    priority: 'low',
    status: 'completed',
    submittedAt: '2024-03-08',
  },
];

const priorityIcons = {
  high: <AlertTriangle className="w-5 h-5 text-red-500" />,
  medium: <Clock className="w-5 h-5 text-amber-500" />,
  low: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
};

const statusColors = {
  new: 'bg-blue-100 text-blue-700',
  in_progress: 'bg-amber-100 text-amber-700',
  completed: 'bg-emerald-100 text-emerald-700',
};

export function MaintenanceRequestsList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockRequests.map((request) => (
        <div key={request.id} className="py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              {priorityIcons[request.priority as keyof typeof priorityIcons]}
              <div>
                <h3 className="font-medium text-gray-900">{request.title}</h3>
                <p className="text-sm text-gray-500">Unit {request.unit}</p>
              </div>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
              statusColors[request.status as keyof typeof statusColors]
            }`}>
              {request.status}
            </span>
            <span className="text-sm text-gray-500">{request.submittedAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}