import React from 'react';
import { FileText, Download } from 'lucide-react';

const mockReports = [
  {
    id: '1',
    name: 'Monthly Performance Report',
    type: 'PDF',
    size: '2.5 MB',
    date: '2024-03-01',
  },
  {
    id: '2',
    name: 'Q1 Financial Analysis',
    type: 'XLSX',
    size: '1.8 MB',
    date: '2024-03-15',
  },
  {
    id: '3',
    name: 'Market Trends Analysis',
    type: 'PDF',
    size: '3.2 MB',
    date: '2024-03-10',
  },
  {
    id: '4',
    name: 'Tax Report 2024',
    type: 'PDF',
    size: '4.1 MB',
    date: '2024-02-28',
  },
];

export function ReportsList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockReports.map((report) => (
        <div key={report.id} className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <FileText className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{report.name}</h3>
              <p className="text-sm text-gray-500">
                {report.type} • {report.size} • {report.date}
              </p>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}