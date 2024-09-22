"use client"

import { useEffect } from "react"

function VerifyEmailContent() {
  useEffect(() => {
    const redirectToApp = () => {
      window.location.href = "numberninja://verified"
    }

    redirectToApp()
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redirecting to NumberNinja...</h1>
    </div>
  )
}

export default function VerifyEmail() {
  return <VerifyEmailContent />
}
