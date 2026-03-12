import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://vvyvlsvmgstqkhhdbklm.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2eXZsc3ZtZ3N0cWtoaGRia2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMTI0ODEsImV4cCI6MjA4ODg4ODQ4MX0.Q_uIHZyCfNqLZionAmpyWpdYdKTdAVTeBxi8br0oEYU' 
export const supabase = createClient(supabaseUrl, supabaseKey )
