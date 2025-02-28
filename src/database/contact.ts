import { DataForm } from "@/types/dataForm";
import { createClient } from "@supabase/supabase-js";
import { validateSupabaseConfig } from "@/utils/config";

const config = validateSupabaseConfig();
export const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey)
const anonClient = createClient(config.supabaseUrl, config.supabaseAnonKey)

export async function saveDataFormToDatabase(data: Omit<DataForm, "id">): Promise<DataForm> {
  try{
    const { data: insertedRows, error } = await supabase
    .from('utenti')   //nome della tabella nel db di supabase
    .insert([{
      ...data,
      id: crypto.randomUUID(),
    }])
    .select();

    if (error) {
      throw error
    }

    if (!insertedRows || insertedRows.length === 0) {
      throw new Error('Nessun messaggio salvato')
    }
    
    //console.log('Messaggio salvato con successo:', insertedRows[0]);
    return insertedRows[0]
  } catch (error) {
    throw error
  }
}