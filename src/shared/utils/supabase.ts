import { createClient } from '@supabase/supabase-js'
import { env } from '@/config/env'

// Si las variables de Supabase no están configuradas (ej. faltan los secrets
// en el despliegue), usamos un cliente "dummy" con URL válida para que
// createClient no tumbe toda la app al arrancar. Las páginas públicas (landing,
// login) siguen funcionando; las llamadas reales a Supabase fallarán de forma
// controlada en vez de romper el render inicial.
const supabaseUrl = env.SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getAuthUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const getCurrentUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
