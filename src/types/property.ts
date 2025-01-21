export interface Property {
  id: string;
  name: string;
  address: string;
  size: number;
  units: number;
  amenities: string[];
  photos: string[];
  createdAt: Date;
}

export interface Unit {
  id: string;
  propertyId: string;
  unitNumber: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  rent: number;
  status: 'vacant' | 'occupied' | 'maintenance';
  currentTenant?: Tenant;
}

export interface Tenant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  leaseStart: Date;
  leaseEnd: Date;
  rentAmount: number;
  documents: Document[];
}

export interface Document {
  id: string;
  name: string;
  type: 'lease' | 'inspection' | 'other';
  url: string;
  createdAt: Date;
}

export interface Inspection {
  id: string;
  propertyId: string;
  unitId?: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes: string;
  issues: MaintenanceIssue[];
}

export interface MaintenanceIssue {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: Date;
}