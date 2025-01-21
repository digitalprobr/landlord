import React from 'react';
import { AlertCircle, Info, Bell } from 'lucide-react';

const mockAnnouncements = [
  {
    id: '1',
    title: 'Building Maintenance Schedule',
    content: 'The annual building maintenance will be conducted next week...',
    priority: 'high',
    date: '2024-03-15',
  },
  {
    id: '2',
    title: 'Community Event',
    content: 'Join us for the summer BBQ event in the courtyard...',
    priority: 'medium',
    date: '2024-03-20',
  },
  {
    id: '3',
    title: 'Holiday Office Hours',
    content: 'The management office will have modified hours during...',
    priority: 'low',
    date: '2024-03-25',
  },
];

const priorityIcons = {
  high: <AlertCircle className="w-5 h-5 text-red-500" />,
  medium: <Bell className="w-5 h-5 text-amber-500" />,
  low: <Info className="w-5 h-5 text-blue-500" />,
};

export function AnnouncementsList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockAnnouncements.map((announcement) => (
        <div key={announcement.id} className="py-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {priorityIcons[announcement.priority as keyof typeof priorityIcons]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                <span className="text-sm text-gray-500">{announcement.date}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{announcement.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}