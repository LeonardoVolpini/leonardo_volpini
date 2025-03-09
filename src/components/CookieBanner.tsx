"use client"

import { useState, useEffect } from 'react'

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences))
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = (type: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [type]: true
    }))
    savePreferences()
    setShowBanner(false)
  }

  const handleDecline = () => {
    savePreferences()
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 pr-4">
          <div className="text-sm space-y-2">
            <p>
              Su questo sito utilizziamo cookie per migliorare la tua esperienza.
              Alcuni sono essenziali, mentre altri ci aiutano a ottimizzare le prestazioni e personalizzare i contenuti.
            </p>

            <div className="hidden md:block">
              <p className="font-semibold">Cookie analitici:</p>
              <p>
                I cookie analitici ci permettono di raccogliere informazioni sull’utilizzo del sito.
                Questi dati ci aiutano a migliorare l’esperienza dell’utente e ottimizzare le performance della piattaforma.
              </p>

              <p className="font-semibold">Cookie di marketing:</p>
              <p>
                I cookie di marketing, inclusi quelli dei social media, vengono utilizzati per mostrarti contenuti personalizzati
                in base ai tuoi interessi e alle tue preferenze di navigazione.
              </p>

              <p>
                Cliccando su <strong>&quot;Accetta&quot;</strong>, acconsenti all&apos;uso dei cookie analitici e di marketing.
              </p>
              <p>
                Cliccando su <strong>&quot;Rifiuta&quot;</strong>, potrai continuare a navigare senza un’esperienza personalizzata.
              </p>

              <p className="text-s text-muted-foreground">
                Puoi modificare le tue preferenze in qualsiasi momento accedendo alla sezione
                <strong> &quot;Gestisci le impostazioni sui cookie&quot;</strong> in calce al sito.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => handleAccept('analytics')}
            className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Accetta
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
          >
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  )
}