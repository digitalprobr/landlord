import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Property } from '../types/property';
import type { FinancialMetrics } from '../types/analytics';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*');

      if (error) throw error;
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return { properties, loading, error };
}

export function useAnalytics() {
  const [metrics, setMetrics] = useState<FinancialMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  async function fetchAnalytics() {
    try {
      const { data, error } = await supabase
        .from('analytics_data')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;

      // Transform data to match FinancialMetrics type
      setMetrics({
        revenue: {
          current: data.rental_income,
          previous: data.rental_income * 0.9, // Example calculation
          trend: 10
        },
        expenses: {
          current: data.expenses,
          previous: data.expenses * 1.1,
          trend: -9.09
        },
        occupancy: {
          current: data.occupancy_rate,
          previous: data.occupancy_rate - 2,
          trend: 2.2
        },
        maintenance: {
          current: data.maintenance_requests,
          previous: data.maintenance_requests + 2,
          trend: -20
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return { metrics, loading, error };
}