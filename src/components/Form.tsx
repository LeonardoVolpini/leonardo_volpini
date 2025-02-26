"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Form = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [prefisso, setPrefisso] = useState("");
  const [cellulare, setCellulare] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dati inviati: ", { nome, cognome, email, cellulare });
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
            placeholder="Inserisci la tua migliore mail"
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
