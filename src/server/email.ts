import nodemailer from 'nodemailer';

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
          <p>Prenota un appuntamento direttamente dal nostro calendario:</p>
          <p><a href="https://cal.com/leonardovolpini/first-call" target="_blank" style="color: #007bff; text-decoration: underline;">📅 Prenota la tua chiamata</a></p>
          <br>
          <p>A presto,</p>
          <p><strong>Il Team</strong></p>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email inviata a: ', email);
  } catch (error) {
    console.error("Errore nell'invio della email: ", error);
    throw new Error("Errore nell'invio della email");
  }
}