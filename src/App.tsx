import React, { useState } from 'react';
import { Plus, Search, Building2, Wallet, Wrench, MessageSquare, BarChart3 } from 'lucide-react';
import { PropertyList } from './components/PropertyList';
import { FinancialDashboard } from './components/FinancialDashboard';
import { MaintenanceDashboard } from './components/MaintenanceDashboard';
import { CommunicationDashboard } from './components/CommunicationDashboard';
import { AnalyticsDashboard } from './components/analytics/AnalyticsDashboard';
import { AddPropertyModal } from './components/AddPropertyModal';
import { useProperties } from './hooks/useSupabase';
import type { Property } from './types/property';

type ActiveTab = 'properties' | 'finances' | 'maintenance' | 'communication' | 'analytics';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<ActiveTab>('properties');
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);
  const { properties, loading, error } = useProperties();
  
  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePropertyClick = (id: string) => {
    console.log('Property clicked:', id);
  };

  const getTabIcon = (tab: ActiveTab) => {
    switch (tab) {
      case 'properties':
        return <Building2 className="w-4 h-4" />;
      case 'finances':
        return <Wallet className="w-4 h-4" />;
      case 'maintenance':
        return <Wrench className="w-4 h-4" />;
      case 'communication':
        return <MessageSquare className="w-4 h-4" />;
      case 'analytics':
        return <BarChart3 className="w-4 h-4" />;
    }
  };

  const getAddButtonText = (tab: ActiveTab) => {
    switch (tab) {
      case 'properties':
        return 'Add Property';
      case 'finances':
        return 'Add Transaction';
      case 'maintenance':
        return 'New Request';
      case 'communication':
        return 'New Message';
      case 'analytics':
        return 'Generate Report';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Property Manager</h1>
            <div className="mt-4 flex space-x-4">
              {(['properties', 'finances', 'maintenance', 'communication', 'analytics'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {getTabIcon(tab)}
                  <span className="capitalize">{tab}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => activeTab === 'properties' && setIsAddPropertyModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>{getAddButtonText(activeTab)}</span>
          </button>
        </div>

        {activeTab === 'properties' && (
          <>
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-500">Loading properties...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <PropertyList
                properties={filteredProperties}
                onPropertyClick={handlePropertyClick}
              />
            )}
          </>
        )}

        {activeTab === 'finances' && <FinancialDashboard />}
        {activeTab === 'maintenance' && <MaintenanceDashboard />}
        {activeTab === 'communication' && <CommunicationDashboard />}
        {activeTab === 'analytics' && <AnalyticsDashboard />}

        <AddPropertyModal
          isOpen={isAddPropertyModalOpen}
          onClose={() => setIsAddPropertyModalOpen(false)}
          onPropertyAdded={() => {
            // Refresh properties list
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
}

export default App;