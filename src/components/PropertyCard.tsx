import React from 'react';
import { Building2, Home, Users, Calendar } from 'lucide-react';
import type { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  onClick: (id: string) => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <div 
      onClick={() => onClick(property.id)}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-100"
    >
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
        <img
          src={property.photos[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
          {property.units} Units
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.name}</h3>
      
      <div className="flex items-center text-gray-600 mb-2">
        <Home className="w-4 h-4 mr-2" />
        <span className="text-sm">{property.address}</span>
      </div>
      
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center text-gray-600">
          <Building2 className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.size} sqft</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.units} units</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {new Date(property.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}