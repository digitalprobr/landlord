import React from 'react';
import { Star, Phone, Mail } from 'lucide-react';

const mockContractors = [
  {
    id: '1',
    name: 'John Doe',
    company: 'Quick Fix Plumbing',
    specialty: ['Plumbing'],
    rating: 4.8,
    phone: '(555) 123-4567',
    email: 'john@quickfix.com',
  },
  {
    id: '2',
    name: 'Sarah Smith',
    company: 'Elite HVAC Services',
    specialty: ['HVAC'],
    rating: 4.9,
    phone: '(555) 987-6543',
    email: 'sarah@elitehvac.com',
  },
];

export function ContractorsList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockContractors.map((contractor) => (
        <div key={contractor.id} className="py-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{contractor.name}</h3>
              <p className="text-sm text-gray-500">{contractor.company}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-sm font-medium">{contractor.rating}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Phone className="w-4 h-4" />
              {contractor.phone}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Mail className="w-4 h-4" />
              {contractor.email}
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            {contractor.specialty.map((spec) => (
              <span
                key={spec}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}