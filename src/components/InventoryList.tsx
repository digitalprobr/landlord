import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const mockInventory = [
  {
    id: '1',
    name: 'Refrigerator',
    model: 'Samsung RF28R7551',
    location: 'Unit A101',
    status: 'active',
    nextMaintenance: '2024-04-15',
    needsAttention: false,
  },
  {
    id: '2',
    name: 'HVAC System',
    model: 'Carrier 24ANB6',
    location: 'Building Roof',
    status: 'repair',
    nextMaintenance: '2024-03-20',
    needsAttention: true,
  },
  {
    id: '3',
    name: 'Washing Machine',
    model: 'LG WM3998HBA',
    location: 'Unit B205',
    status: 'active',
    nextMaintenance: '2024-05-01',
    needsAttention: false,
  },
];

const statusColors = {
  active: 'bg-emerald-100 text-emerald-700',
  repair: 'bg-red-100 text-red-700',
  replaced: 'bg-blue-100 text-blue-700',
  disposed: 'bg-gray-100 text-gray-700',
};

export function InventoryList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockInventory.map((item) => (
        <div key={item.id} className="py-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.model}</p>
            </div>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
              statusColors[item.status as keyof typeof statusColors]
            }`}>
              {item.status}
            </span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">{item.location}</span>
            <div className="flex items-center gap-3">
              {item.needsAttention && (
                <div className="flex items-center gap-1 text-amber-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs">Needs attention</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-xs">Next maintenance: {item.nextMaintenance}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}