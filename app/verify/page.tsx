"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function VerifyEmailContent() {
  const [status, setStatus] = useState("Verifying...")
  const searchParams = useSearchParams()
  const router = useRouter()
  const redirectUrl = searchParams.get("redirect")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!redirectUrl) {
        setStatus("Invalid verification link. Missing parameters.")
        return
      }

      setStatus("Email verified successfully! Opening NumberNinja...")

      // Delay to ensure the user sees the status message before redirecting
      setTimeout(() => {
        router.push(redirectUrl as string)
      }, 1000)
    }

    verifyEmail()
  }, [redirectUrl, router])

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
