export interface Payment {
  id: string;
  propertyId: string;
  unitId: string;
  tenantId: string;
  amount: number;
  type: 'rent' | 'deposit' | 'fee';
  status: 'pending' | 'completed' | 'failed';
  dueDate: Date;
  paidDate?: Date;
  paymentMethod?: 'bank_transfer' | 'credit_card' | 'check';
  notes?: string;
}

export interface Expense {
  id: string;
  propertyId: string;
  category: 'maintenance' | 'utilities' | 'insurance' | 'taxes' | 'other';
  amount: number;
  date: Date;
  description: string;
  receipt?: string;
  vendor?: string;
  recurring: boolean;
  frequency?: 'monthly' | 'quarterly' | 'annually';
}

export interface FinancialReport {
  id: string;
  propertyId: string;
  type: 'income_statement' | 'profit_loss' | 'tax_report';
  startDate: Date;
  endDate: Date;
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  generatedAt: Date;
}