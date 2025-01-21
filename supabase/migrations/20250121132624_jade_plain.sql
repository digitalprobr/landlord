/*
  # User Roles and Profiles Setup

  1. New Tables
    - `user_profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `role` (text, either 'admin' or 'customer')
      - `full_name` (text)
      - `phone` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on user_profiles table
    - Add policies for user profile access
    - Add function to get current user's role
*/

-- Create enum for user roles
CREATE TYPE user_role AS ENUM ('admin', 'customer');

-- Create profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL UNIQUE,
  role user_role NOT NULL DEFAULT 'customer',
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create function to get current user's role
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS user_role
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_role user_role;
BEGIN
  SELECT role INTO current_role
  FROM user_profiles
  WHERE user_id = auth.uid();
  RETURN current_role;
END;
$$;

-- Create trigger to create profile on user creation
CREATE OR REPLACE FUNCTION create_profile_for_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO user_profiles (user_id, role)
  VALUES (NEW.id, 'customer');
  RETURN NEW;
END;
$$;

CREATE TRIGGER create_profile_after_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_profile_for_user();