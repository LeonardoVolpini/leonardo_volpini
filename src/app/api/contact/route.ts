// pages/api/contact.ts
import { NextResponse } from 'next/server'
import { validate } from 'email-validator'
import { saveDataFormToDatabase } from '@/database/contact'

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, cognome, email, cellulare, newsletter, privacy } = body;

    // Validazione dei dati
    if (!nome || !cognome || !email || !cellulare || !privacy) {
      return NextResponse.json(
        { error: "Tutti i campi obbligatori devono essere compilati" },
        { status: 400 }
      );
    }

    if (!validate(email)) {
      return NextResponse.json(
        { error: "Email non valida" },
        { status: 400 }
      );
    }

    // Salva nel database
    await saveDataFormToDatabase({
      nome,
      cognome,
      email,
      cellulare,
      newsletter,
      privacy,
      timestamp: new Date().toISOString()
    })

    // Invia email di conferma
    if (email && newsletter) {
      //await sendConfirmationEmail(email, nome)  TODO
    }

    console.log('Messaggio inviato con successo')
    return NextResponse.json(
      { message: "Messaggio inviato con successo" },
      { status: 200 }
    );
  } catch (error) {
    console.log('Errore nel server:', error)
    return NextResponse.json(
      {
        error: "Errore nel server",
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}