-- Add new columns to projects table for detailed info
ALTER TABLE public.projects 
ADD COLUMN IF NOT EXISTS description_long TEXT,
ADD COLUMN IF NOT EXISTS website_url TEXT,
ADD COLUMN IF NOT EXISTS appraisal_value DECIMAL(10, 2);

-- Create bids table for purchase offers
CREATE TABLE public.bids (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  user_id UUID NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on bids
ALTER TABLE public.bids ENABLE ROW LEVEL SECURITY;

-- Policies for bids
CREATE POLICY "Users can view their own bids" 
ON public.bids 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create bids" 
ON public.bids 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Project owners can view all bids for their projects" 
ON public.bids 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.projects 
  WHERE projects.id = bids.project_id 
  AND projects.created_by = auth.uid()
));