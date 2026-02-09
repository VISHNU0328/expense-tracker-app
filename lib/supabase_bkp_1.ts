import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(
	https://sxorempheetiqtctbkiz.supabase.co,
	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4b3JlbXBoZWV0aXF0Y3Ria2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MTgzMDQsImV4cCI6MjA4NjE5NDMwNH0.r1uMcKsagVdJ7L4_qj4LMmDJtLqHLkHujB8bqLBH5mw);
