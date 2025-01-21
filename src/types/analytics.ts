export interface PropertyPerformance {
  id: string;
  propertyId: string;
  period: string;
  occupancyRate: number;
  rentalIncome: number;
  expenses: number;
  netIncome: number;
  maintenanceRequests: number;
  tenantSatisfaction: number;
}

export interface MarketData {
  id: string;
  area: string;
  period: string;
  averageRent: number;
  occupancyRate: number;
  pricePerSqFt: number;
  yearOverYearGrowth: number;
}

export interface FinancialMetrics {
  revenue: {
    current: number;
    previous: number;
    trend: number;
  };
  expenses: {
    current: number;
    previous: number;
    trend: number;
  };
  occupancy: {
    current: number;
    previous: number;
    trend: number;
  };
  maintenance: {
    current: number;
    previous: number;
    trend: number;
  };
}