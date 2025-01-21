export interface MaintenanceRequest {
  id: string;
  propertyId: string;
  unitId: string;
  tenantId: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'emergency';
  status: 'new' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  category: 'plumbing' | 'electrical' | 'hvac' | 'appliance' | 'structural' | 'other';
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  assignedTo?: string;
  estimatedCost?: number;
  actualCost?: number;
}

export interface Contractor {
  id: string;
  name: string;
  company: string;
  specialty: string[];
  email: string;
  phone: string;
  rate: number;
  rating: number;
  insurance: {
    provider: string;
    policyNumber: string;
    expiryDate: Date;
  };
  documents: {
    id: string;
    name: string;
    url: string;
    type: 'license' | 'insurance' | 'contract' | 'other';
  }[];
  availability: {
    days: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[];
    hours: {
      start: string;
      end: string;
    };
  };
}

export interface InventoryItem {
  id: string;
  propertyId: string;
  unitId?: string;
  name: string;
  category: 'appliance' | 'furniture' | 'equipment' | 'other';
  manufacturer: string;
  model: string;
  serialNumber: string;
  purchaseDate: Date;
  purchasePrice: number;
  warrantyExpiration?: Date;
  lastMaintenanceDate?: Date;
  maintenanceSchedule?: {
    frequency: 'monthly' | 'quarterly' | 'annually';
    lastCompleted: Date;
    nextDue: Date;
  };
  status: 'active' | 'repair' | 'replaced' | 'disposed';
  location: string;
  notes: string;
}