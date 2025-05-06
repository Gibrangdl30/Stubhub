"use client"

import { useEffect } from "react"

interface StripePaymentButtonProps {
  className?: string
}

export function StripePaymentButton({ className = "" }: StripePaymentButtonProps) {
  useEffect(() => {
    // Cargar el script de Stripe si aún no está cargado
    const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://js.stripe.com/v3/buy-button.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className={className}>
      <stripe-buy-button
        buy-button-id="buy_btn_1RLc4QDmbPVIe78Q14GNykvk"
        publishable-key="pk_live_51RJVg0DmbPVIe78Q9S3NUPRaGC842f1uwbNY5htrYteg2p4TTFKHQoCFh0lyaEQi1dOah5M2VpMYrGicNV36K4fP00zwV4vBDO"
      ></stripe-buy-button>
    </div>
  )
}
