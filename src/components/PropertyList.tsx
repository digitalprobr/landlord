import React from 'react';
import { PropertyCard } from './PropertyCard';
import type { Property } from '../types/property';

interface PropertyListProps {
  properties: Property[];
  onPropertyClick: (id: string) => void;
}

export function PropertyList({ properties, onPropertyClick }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={onPropertyClick}
        />
      ))}
    </div>
  );
}