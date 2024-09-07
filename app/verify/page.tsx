"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { auth } from "../../firebaseConfig"
import { applyActionCode, signInWithEmailLink } from "firebase/auth"

function VerifyEmailContent() {
  const [status, setStatus] = useState("Verifying...")
  const searchParams = useSearchParams()
  const oobCode = searchParams.get("oobCode")
  const redirectUrl = searchParams.get("redirect")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!oobCode || !redirectUrl) {
        setStatus("Invalid verification link. Missing parameters.")
        return
      }

      try {
        await applyActionCode(auth, oobCode)
        setStatus("Email verified successfully! Opening NumberNinja...")

        // Get the email from local storage
        const email = localStorage.getItem("emailForSignIn")
        if (email) {
          // Sign in the user
          await signInWithEmailLink(auth, email, window.location.href)
          localStorage.removeItem("emailForSignIn")
        }

        // Redirect to the app
        window.location.href = redirectUrl
      } catch (error) {
        console.error("Error verifying email:", error)
        setStatus("Error verifying email. Please try again.")
      }
    }

    verifyEmail()
  }, [oobCode, redirectUrl])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{status}</h1>
    </div>
  )
}

export default function VerifyEmail() {
  return <VerifyEmailContent />
}
