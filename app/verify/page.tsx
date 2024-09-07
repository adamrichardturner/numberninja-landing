"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { auth } from "../../firebaseConfig"
import { applyActionCode, signInWithEmailLink } from "firebase/auth"

function VerifyEmailContent() {
  const [status, setStatus] = useState("Verifying...")
  const searchParams = useSearchParams()
  const oobCode = searchParams.get("oobCode")
  const continueUrl = searchParams.get("continueUrl")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!oobCode) {
        setStatus("Invalid verification link. Missing oobCode.")
        return
      }

      try {
        await applyActionCode(auth, oobCode)
        setStatus("Email verified successfully!")

        // Get the email from local storage
        const email = localStorage.getItem("emailForSignIn")
        if (email) {
          // Sign in the user
          await signInWithEmailLink(auth, email, window.location.href)
          localStorage.removeItem("emailForSignIn")
          setStatus("Signed in successfully. Redirecting to NumberNinja...")
        }

        // Redirect to the app
        if (continueUrl) {
          window.location.href = continueUrl
        } else {
          setStatus("Email verified, but no redirect URL provided.")
        }
      } catch (error) {
        console.error("Error verifying email:", error)
        setStatus("Error verifying email. Please try again.")
      }
    }

    verifyEmail()
  }, [oobCode, continueUrl])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{status}</h1>
    </div>
  )
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  )
}
