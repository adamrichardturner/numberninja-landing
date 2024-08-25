"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getAuth, applyActionCode } from "firebase/auth"

function VerifyEmailContent() {
  const [status, setStatus] = useState("Verifying...")
  const searchParams = useSearchParams()
  const router = useRouter()
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
          setStatus("Email already verified! Redirecting...")
          setTimeout(() => {
            router.push(redirectUrl as string)
          }, 1000)
          return
        }

        // Apply the action code for email verification
        await applyActionCode(auth, oobCode as string)
        setStatus("Email verified successfully! Redirecting...")

        // Delay to ensure Firebase updates state before redirecting
        setTimeout(() => {
          router.push(redirectUrl as string)
        }, 1000)
      } catch (error) {
        console.error("Error verifying email:", error)
        setStatus("Error verifying email. Please try again.")
      }
    }

    verifyEmail()
  }, [oobCode, redirectUrl, router])

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
