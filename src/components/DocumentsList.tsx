import React from 'react';
import { FileText, Download } from 'lucide-react';

const mockDocuments = [
  {
    id: '1',
    name: 'Lease Agreement - Unit A101',
    type: 'PDF',
    size: '2.5 MB',
    updatedAt: '2024-03-10',
  },
  {
    id: '2',
    name: 'Building Rules and Regulations',
    type: 'DOC',
    size: '1.8 MB',
    updatedAt: '2024-03-08',
  },
  {
    id: '3',
    name: 'Maintenance Report - February',
    type: 'PDF',
    size: '3.2 MB',
    updatedAt: '2024-03-01',
  },
];

export function DocumentsList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockDocuments.map((document) => (
        <div key={document.id} className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{document.name}</h3>
                <p className="text-sm text-gray-500">
                  {document.type} • {document.size}
                </p>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}