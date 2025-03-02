"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  cellulare: string;
  newsletter: boolean;
  privacy: boolean;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cognome: "",
    email: "",
    cellulare: "",
    newsletter: false,
    privacy: false,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    // Controllo se la cellulare inserito
    if (!formData.cellulare) {
      setError("Inserisci il numero di telefono");
      return false;
    }

    // Controllo se la privacy è accettata
    if (!formData.privacy) {
      setError("Devi accettare il trattamento dei dati personali.");
      return false;
    }

    return true;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if(response.ok) {
        console.log("Messaggio inviato con successo");
        setFormData({
          nome: "",
          cognome: "",
          email: "",
          cellulare: "",
          newsletter: false,
          privacy: false,
        });
      } else {
        const data = await response.json();
        if(response.status === 409) {
          setError(data.error || "Email già registrata");
        } else {
          setError(data.error || "Errore nel server");
        }
      }
    } catch (error) {
      console.log("Errore nel server: " + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-gray-200">
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
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
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
            value={formData.cognome}
            onChange={(e) => setFormData({...formData, cognome: e.target.value})}
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
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
            value={formData.cellulare}
            onChange={(e) => setFormData({...formData, cellulare: e})}
            inputClass="!w-full !rounded-full !border !py-3 !pl-14 !pr-4 focus:!outline-none focus:!ring-2 focus:!ring-gray-900"
            dropdownClass="custom-dropdown"
            buttonClass="custom-button"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({...formData, newsletter: !formData.newsletter})}
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
            checked={formData.privacy}
            onChange={(e) => setFormData({...formData, privacy: !formData.privacy})}
            className="w-5 h-5 mt-1 text-red-600 border-gray-300 rounded focus:ring-gray-900"
          />
            <label htmlFor="privacy" className="ml-3 text-gray-700">
              Acconsento al <a href="/privacy-policy" className="text-blue-700 underline">trattamento dati personali</a> <span className="text-red-500">*</span>
            </label>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-full bg-header/95 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 mt-3"
        >
          {isSubmitting ? (
          <>
            <span>Invio in corso...</span>
            <Send className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            <span>Invia</span>
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
        </button>
      </form>
    </div>
  );
};
