"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Form = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Controllo se la cellulare inserito
    if (!cellulare) {
      setError("Inserisci il numero di telefono");
      return;
    }

    // Controllo se la privacy è accettata
    if (!privacy) {
      setError("Devi accettare il trattamento dei dati personali.");
      return;
    }
    setError("");

    console.log("Dati inviati: ", { nome, cognome, email, cellulare, newsletter, privacy });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
        Compila il modulo
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium text-gray-900">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nome"
            placeholder="Inserisci il tuo nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-900">
            Cognome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cognome"
            placeholder="Inserisci il tuo cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-900">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Inserisci la tua migliore email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-900">
            Telefono <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={"it"}
            value={cellulare}
            onChange={(e) => setCellulare(e)}
            inputClass="!w-full !rounded-full !border !py-3 !pl-14 !pr-4 focus:!outline-none focus:!ring-2 focus:!ring-gray-900"
            dropdownClass="custom-dropdown"
            buttonClass="custom-button"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="newsletter"
            checked={newsletter}
            onChange={() => setNewsletter(!newsletter)}
            className="w-5 h-5 mt-1 text-red-600 border-gray-300 rounded focus:ring-gray-900"
          />
          <label htmlFor="newsletter" className="ml-3 text-gray-700">
            Dichiaro di voler ricevere news, risorse e offerte da parte di Leonardo
          </label>
        </div>

        {/* Checkbox Privacy (Obbligatoria) */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            checked={privacy}
            onChange={() => setPrivacy(!privacy)}
            className="w-5 h-5 mt-1 text-red-600 border-gray-300 rounded focus:ring-gray-900"
          />
          <label htmlFor="privacy" className="ml-3 text-gray-700">
            Acconsento al trattamento dati personali <span className="text-red-500">*</span>
          </label>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-header/95 text-white p-3 rounded-full font-medium hover:bg-blue-700 transition border border-black mt-3"
        >
          Invia
        </button>
      </form>
    </div>
  );
};
