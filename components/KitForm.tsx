'use client'

import { useEffect } from 'react'

const KIT_UID = '97acba5efc'
const KIT_SRC = 'https://second-act-wealth-hub.kit.com/97acba5efc/index.js'

export default function KitForm() {
  useEffect(() => {
    // Guard: don't inject the script more than once
    if (document.querySelector(`script[data-uid="${KIT_UID}"]`)) return

    const script = document.createElement('script')
    script.src = KIT_SRC
    script.async = true
    script.setAttribute('data-uid', KIT_UID)
    document.body.appendChild(script)

    return () => {
      const existing = document.querySelector(`script[data-uid="${KIT_UID}"]`)
      if (existing) existing.remove()
    }
  }, [])

  // Kit reads this data-uid div and renders the form inside it
  return (
    <div className="kit-form-container w-full max-w-md mx-auto">
      <div data-uid={KIT_UID} />
    </div>
  )
}
