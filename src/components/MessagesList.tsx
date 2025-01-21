import React from 'react';
import { User, Paperclip } from 'lucide-react';

const mockMessages = [
  {
    id: '1',
    sender: 'John Smith',
    content: 'When will the maintenance team fix the AC?',
    time: '10:30 AM',
    unread: true,
    hasAttachment: false,
  },
  {
    id: '2',
    sender: 'Sarah Johnson',
    content: 'Here is my signed lease agreement.',
    time: 'Yesterday',
    unread: true,
    hasAttachment: true,
  },
  {
    id: '3',
    sender: 'Mike Wilson',
    content: 'Thank you for addressing the noise complaint.',
    time: '2 days ago',
    unread: false,
    hasAttachment: false,
  },
];

export function MessagesList() {
  return (
    <div className="divide-y divide-gray-100">
      {mockMessages.map((message) => (
        <div key={message.id} className="py-4 flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium text-gray-900">{message.sender}</h3>
              <span className="text-sm text-gray-500">{message.time}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{message.content}</p>
            {message.hasAttachment && (
              <div className="flex items-center gap-1 mt-2 text-sm text-blue-500">
                <Paperclip className="w-4 h-4" />
                <span>Attachment</span>
              </div>
            )}
          </div>
          {message.unread && (
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
}