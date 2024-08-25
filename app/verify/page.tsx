"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { getAuth, applyActionCode } from "firebase/auth"

function VerifyEmailContent() {
  const [status, setStatus] = useState("Verifying...")
  const [verified, setVerified] = useState(false)
  const searchParams = useSearchParams()
  const oobCode = searchParams.get("oobCode")
  const redirectUrl = searchParams.get("redirect")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!oobCode || !redirectUrl) {
        setStatus("Invalid verification link. Missing parameters.")
        return
      }

      const auth = getAuth()

      try {
        // Avoid unnecessary re-verification
        const user = auth.currentUser
        if (user && user.emailVerified) {
          setStatus("Email already verified!")
          setVerified(true)
          return
        }

        // Apply the action code for email verification
        await applyActionCode(auth, oobCode as string)
        setStatus("Email verified successfully!")
        setVerified(true)
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
      {verified && (
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = redirectUrl as string)}
        >
          Open Number Ninja
        </button>
      )}
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
