import { DataForm } from "@/types/dataForm";
import { createClient } from "@supabase/supabase-js";
import { validateSupabaseConfig } from "@/utils/config";

const config = validateSupabaseConfig();
export const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey)
const anonClient = createClient(config.supabaseUrl, config.supabaseAnonKey)

export async function saveDataFormToDatabase(data: Omit<DataForm, "id">): Promise<DataForm> {
  try{
    const { data: messages, error } = await supabase
    .from('messages')
    .insert([{
      ...data,
      id: crypto.randomUUID(),
    }]) as { data: DataForm[] | null, error: any }

    if (error) {
      throw error
    }

    if (!messages || messages.length === 0) {
      throw new Error('Nessun messaggio salvato')
    }
    
    console.log('Messaggio salvato con successo:', messages[0])
    return messages[0]
  } catch (error) {
    throw error
  }
}