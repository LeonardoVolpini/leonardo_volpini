import { ConfigSupabase } from '@/types/supabase'

export function validateSupabaseConfig(): ConfigSupabase {
  const config: ConfigSupabase = {
    supabaseUrl: process.env.SUPABASE_URL!,
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY!,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY!
  }

  // Validazione delle variabili d'ambiente
  if (!config.supabaseUrl || !config.supabaseServiceKey || !config.supabaseAnonKey) {
    throw new Error('Configurazione Supabase non valida')
  }

  return config
}