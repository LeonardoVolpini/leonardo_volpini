import React from "react";
import { CookieManager } from "./CookiesManager";

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduzione</h2>
        <p>
          La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo i dati personali degli utenti che visitano il presente sito web.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Dati Raccolti</h2>
        <p>
          Raccogliamo dati personali quali nome, indirizzo email e altre informazioni che l&apos;utente fornisce volontariamente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Finalità del Trattamento</h2>
        <p>
          Utilizziamo i dati raccolti per fornire servizi, migliorare l&apos;esperienza utente e comunicare informazioni pertinenti.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Condivisione dei Dati</h2>
        <p>
          I dati personali non saranno condivisi con terze parti senza il consenso dell&apos;utente, salvo obblighi di legge.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Diritti degli Utenti</h2>
        <p>
          Gli utenti possono richiedere l&apos;accesso, la modifica o la cancellazione dei propri dati in qualsiasi momento contattandoci.
        </p>
        <p>
          Per gli utenti iscritti alla newsletter: non appena l&apos;utente si cancella dalla newsletter i dati personali vengono eliminati completamente dal nostro gestionale.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Conservazione dei dati</h2>
        <p>
          Questo sito e osserva specifiche misure di sicurezza per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tipologie di cookies usate</h2>
        <p>
          Due tipi di cookie possono essere usati sul sito: ‘session cookies’ e ‘persistent cookies’:
        </p>
        <ul>
          <li className="list-disc list-inside">I ‘session cookies’ sono cookie temporanei che rimangono sul dispositivo fino al momento in cui lasci il sito.</li>
          <li className="list-disc list-inside">Il ‘persistent cookie’ rimane sul tuo dispositivo per più tempo o fino a quando lo cancellate manualmente.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Consenso all&apos;utilizzo dei cookies</h2>
        <p>
          Ti ricordiamo che, se non acconsenti all&apos;uso dei cookie e scegli di disabilitarli, la tua esperienza di navigazione
          sul nostro sito potrebbe essere compromessa, impedendoti di accedere a determinate sezioni o funzionalità.
        </p>
        <p>
          Puoi modificare le tue preferenze sui cookie in qualsiasi momento, anche dopo aver fornito il consenso iniziale.
          Puoi attraverso il seguente link: <CookieManager />
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Modifiche alla Privacy Policy</h2>
        <p>
          Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
