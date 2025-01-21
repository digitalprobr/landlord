/*
  # Initial Schema Setup for Landlord App

  1. New Tables
    - properties
    - units
    - tenants
    - maintenance_requests
    - financial_transactions
    - analytics_data
    - reports

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Properties Table
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  size INTEGER NOT NULL,
  units INTEGER NOT NULL,
  amenities TEXT[],
  photos TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Units Table
CREATE TABLE IF NOT EXISTS units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  unit_number TEXT NOT NULL,
  size INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  rent DECIMAL NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE units ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own units"
  ON units
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Tenants Table
CREATE TABLE IF NOT EXISTS tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  lease_start DATE NOT NULL,
  lease_end DATE NOT NULL,
  rent_amount DECIMAL NOT NULL,
  unit_id UUID REFERENCES units(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own tenants"
  ON tenants
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Maintenance Requests Table
CREATE TABLE IF NOT EXISTS maintenance_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  unit_id UUID REFERENCES units(id),
  tenant_id UUID REFERENCES tenants(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  priority TEXT NOT NULL,
  status TEXT NOT NULL,
  category TEXT NOT NULL,
  photos TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ,
  assigned_to TEXT,
  estimated_cost DECIMAL,
  actual_cost DECIMAL,
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE maintenance_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own maintenance requests"
  ON maintenance_requests
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Financial Transactions Table
CREATE TABLE IF NOT EXISTS financial_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  unit_id UUID REFERENCES units(id),
  tenant_id UUID REFERENCES tenants(id),
  type TEXT NOT NULL,
  amount DECIMAL NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE financial_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own financial transactions"
  ON financial_transactions
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Analytics Data Table
CREATE TABLE IF NOT EXISTS analytics_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  period TEXT NOT NULL,
  occupancy_rate DECIMAL NOT NULL,
  rental_income DECIMAL NOT NULL,
  expenses DECIMAL NOT NULL,
  net_income DECIMAL NOT NULL,
  maintenance_requests INTEGER NOT NULL,
  tenant_satisfaction DECIMAL,
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE analytics_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own analytics data"
  ON analytics_data
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Reports Table
CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID REFERENCES auth.users(id)
);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own reports"
  ON reports
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);