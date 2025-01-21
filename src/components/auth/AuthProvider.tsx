import React, { createContext, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { AuthContext, UserProfile } from '../../lib/auth';
import { LoadingScreen } from '../LoadingScreen';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function fetchUserProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      setUser(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      role: user?.role ?? null,
    }}>
      {children}
    </AuthContext.Provider>
  );
}