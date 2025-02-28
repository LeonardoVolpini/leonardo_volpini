// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { validate } from 'email-validator'
import rateLimit from 'express-rate-limit'
import { saveDataFormToDatabase } from '@/database/contact'

//per evitare saturazioni da spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Applica il rate limiting
    await new Promise((resolve, reject) => {
      limiter(req, res, (result: any) => {
        if (result instanceof Error) {
          reject(result)
        } else {
          resolve(result)
        }
      })
    })

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    const { nome, cognome, email, cellulare, newsletter, privacy } = req.body

    // Validazione dei dati
    if (!nome || !cognome || !email || !cellulare || !privacy) {
      return res.status(400).json({ error: 'I campi nome, cognome, email, telefono, trattamento dei dati sono obbligatori' })
    }

    if (!validate(email)) {
      return res.status(400).json({ error: 'Email non valida' })
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
    if(email && newsletter) {
      //await sendConfirmationEmail(email, nome)  TODO
    }

    res.status(200).json({ message: 'Messaggio inviato con successo' })
    console.log('Messaggio inviato con successo')
  } catch (error) {
    console.error(error)
    res.status(500).json({ 
      error: 'Errore nel server',
      details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
     })
  }
}