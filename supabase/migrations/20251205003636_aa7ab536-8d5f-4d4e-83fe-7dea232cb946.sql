-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'beta',
  logo_url TEXT,
  users_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Anyone can view projects (public display)
CREATE POLICY "Anyone can view projects" 
ON public.projects 
FOR SELECT 
USING (true);

-- Authenticated users can create projects
CREATE POLICY "Authenticated users can create projects" 
ON public.projects 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Authenticated users can update projects
CREATE POLICY "Authenticated users can update projects" 
ON public.projects 
FOR UPDATE 
TO authenticated
USING (true);

-- Authenticated users can delete projects
CREATE POLICY "Authenticated users can delete projects" 
ON public.projects 
FOR DELETE 
TO authenticated
USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();