import React from 'react';
import { Wrench, Clock, AlertTriangle, CheckCircle2, Users, Package } from 'lucide-react';
import { MaintenanceRequestsList } from './MaintenanceRequestsList';
import { ContractorsList } from './ContractorsList';
import { InventoryList } from './InventoryList';

export function MaintenanceDashboard() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-amber-600">5 pending</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Open Requests</h3>
          <p className="text-2xl font-semibold">12</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-red-600">2 urgent</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">High Priority</h3>
          <p className="text-2xl font-semibold">3</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-emerald-600">This week</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Completed</h3>
          <p className="text-2xl font-semibold">8</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Recent Requests
              </h2>
              <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
            </div>
            <MaintenanceRequestsList />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Available Contractors
              </h2>
              <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
            </div>
            <ContractorsList />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Package className="w-5 h-5" />
              Inventory Overview
            </h2>
            <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
          </div>
          <InventoryList />
        </div>
      </div>
    </div>
  );
}