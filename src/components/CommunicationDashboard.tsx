import React from 'react';
import { MessageSquare, Bell, FileText } from 'lucide-react';
import { MessagesList } from './MessagesList';
import { AnnouncementsList } from './AnnouncementsList';
import { DocumentsList } from './DocumentsList';

export function CommunicationDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-blue-600">3 unread</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Messages</h3>
          <p className="text-2xl font-semibold">15</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Bell className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-amber-600">1 new</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Announcements</h3>
          <p className="text-2xl font-semibold">5</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-emerald-600">2 shared</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Documents</h3>
          <p className="text-2xl font-semibold">24</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Messages
              </h2>
              <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
            </div>
            <MessagesList />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Announcements
              </h2>
              <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
            </div>
            <AnnouncementsList />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Documents
            </h2>
            <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
          </div>
          <DocumentsList />
        </div>
      </div>
    </div>
  );
}