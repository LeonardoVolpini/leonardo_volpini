"use client"
import { CookiePreferences } from "@/types/cookie"
import { useState, useEffect } from 'react'

// Componente per gestire le preferenze dei cookie
export const CookieManager = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferencesModal, setShowPreferencesModal] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Sempre attivo
    analytics: false,
    marketing: false
  })

  // Carica le preferenze dal localStorage all'avvio
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences))
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  // Salva le preferenze nel localStorage
  const savePreferences = (newPreferences?: CookiePreferences) => {
    const prefsToSave = newPreferences || preferences
    localStorage.setItem('cookiePreferences', JSON.stringify(prefsToSave))
  }

  // Gestisce l'accettazione di tutti i cookie
  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true
    }
    setPreferences(newPreferences)
    savePreferences(newPreferences)
    setShowBanner(false)
    setShowPreferencesModal(false)
  }

  // Gestisce il rifiuto di tutti i cookie non essenziali
  const handleDeclineAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false
    }
    setPreferences(newPreferences)
    savePreferences(newPreferences)
    setShowBanner(false)
    setShowPreferencesModal(false)
  }

  // Gestisce il salvataggio delle preferenze personalizzate
  const handleSavePreferences = () => {
    savePreferences()
    setShowBanner(false)
    setShowPreferencesModal(false)
  }

  // Toggle per le singole preferenze
  const handleTogglePreference = (type: keyof CookiePreferences) => {
    if (type === 'essential') return // Non permettere di disattivare i cookie essenziali
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  // Apre il modale delle preferenze
  const openPreferencesModal = () => {
    setShowPreferencesModal(true)
  }

  // Componente CookieBanner
  const renderCookieBanner = () => {
    if (!showBanner) return null

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-sm p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-start gap-4 pr-4 mb-4 md:mb-0">
            <div className="text-sm space-y-2">
              <p className="font-medium">
                Su questo sito utilizziamo cookie per migliorare la tua esperienza.
              </p>
              <p className="text-muted-foreground">
                Alcuni sono essenziali, mentre altri ci aiutano a ottimizzare le prestazioni e personalizzare i contenuti.
              </p>
              <button 
                onClick={openPreferencesModal}
                className="text-primary underline"
              >
                Personalizza preferenze
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-4 self-end md:self-auto">
            <button
              onClick={handleDeclineAll}
              className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
            >
              Rifiuta tutti
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Componente per il modale delle preferenze
  const renderPreferencesModal = () => {
    if (!showPreferencesModal) return null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Preferenze Cookie</h2>
            <p className="mb-6 text-muted-foreground">
              Personalizza le tue preferenze sui cookie. I cookie essenziali sono sempre attivi per garantire il funzionamento del sito.
            </p>

            <div className="space-y-6 mb-8">
              {/* Cookie essenziali - sempre attivi */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium">Cookie essenziali</h3>
                  <p className="text-sm text-muted-foreground">
                    Necessari per il funzionamento del sito e non possono essere disattivati.
                  </p>
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                  Sempre attivi
                </div>
              </div>

              {/* Cookie analitici */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium">Cookie analitici</h3>
                  <p className="text-sm text-muted-foreground">
                    Ci permettono di raccogliere informazioni sull&apos;utilizzo del sito per migliorarne l&apos;esperienza.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={preferences.analytics}
                    onChange={() => handleTogglePreference('analytics')}
                  />
                  <div className="w-11 h-6 bg-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Cookie marketing */}
              <div className="flex items-center justify-between pb-4">
                <div>
                  <h3 className="font-medium">Cookie di marketing</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizzati per mostrarti contenuti personalizzati in base ai tuoi interessi.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={preferences.marketing}
                    onChange={() => handleTogglePreference('marketing')}
                  />
                  <div className="w-11 h-6 bg-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t">
              <button
                onClick={() => setShowPreferencesModal(false)}
                className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
              >
                Annulla
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Pulsante per aprire il gestore delle preferenze (da inserire nel footer)
  const CookiePreferencesButton = () => {
    return (
      <button
        onClick={openPreferencesModal}
        className="text-sm text-blue-700 hover:underline"
      >
        Gestisci impostazioni cookie
      </button>
    )
  }

  return (
    <>
      {renderCookieBanner()}
      {renderPreferencesModal()}
      {/* Esporta il pulsante per essere utilizzato nel footer */}
      <CookiePreferencesButton />
    </>
  )
}

// Hook personalizzato per verificare lo stato dei consensi
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      setConsent(JSON.parse(savedPreferences))
    }
  }, [])

  return {
    hasAnalyticsConsent: consent.analytics,
    hasMarketingConsent: consent.marketing
  }
}