import { DataForm } from "@/types/dataForm";
import { createClient } from "@supabase/supabase-js";
import { validateSupabaseConfig } from "@/utils/config";
import nodemailer from 'nodemailer';

const config = validateSupabaseConfig();
const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey)
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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendThankEmail(email: string, nome: string) {
  try {
    console.log('Invio email di conferma a: ', email);
    const mailOptions = {
      from: `"Leonardo Volpini" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Grazie per averci contattato!',
      html: `
        <p>Ciao <strong>${nome}</strong>,</p>
        <p>Grazie per aver compilato il nostro form!</p>
        <p>Vorremmo offrirti una prima chiamata conoscitiva gratuita per capire meglio le tue esigenze.</p>
        <p>Rispondi a questa email per fissare un appuntamento.</p>
        <br>
        <p>A presto,</p>
        <p><strong>Il Team</strong></p>
      `,  //TODO: anziche far rispondere alla mail metterò un link a calendfy
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email inviata: ', info.messageId);
  } catch (error) {
    console.error("Errore nell'invio della email: ", error);
    throw new Error("Errore nell'invio della email");
  }
}