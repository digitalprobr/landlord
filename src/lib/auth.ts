import { createContext, useContext } from 'react';
import { supabase } from './supabase';

export type UserRole = 'admin' | 'customer';

export interface UserProfile {
  id: string;
  role: UserRole;
  full_name: string | null;
  phone: string | null;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  role: UserRole | null;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  role: null,
});

export const useAuth = () => useContext(AuthContext);

export async function signUp(email: string, password: string, fullName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getUserProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  const { data: profile, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) throw error;
  return profile;
}