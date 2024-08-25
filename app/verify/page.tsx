"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { applyActionCode, getAuth } from "firebase/auth"

export default function VerifyPage() {
  const [verificationStatus, setVerificationStatus] = useState<string | null>(
    null
  )
  const searchParams = useSearchParams()
  const router = useRouter()
  const oobCode = searchParams.get("oobCode")
  const continueUrl = searchParams.get("continueUrl")

  useEffect(() => {
    const verifyEmail = async () => {
      if (oobCode) {
        try {
          const auth = getAuth()
          await applyActionCode(auth, oobCode)
          setVerificationStatus("success")
          if (continueUrl) {
            router.push(continueUrl)
          }
        } catch (error) {
          setVerificationStatus("error")
          console.error("Error verifying email:", error)
        }
      }
    }

    verifyEmail()
  }, [oobCode, continueUrl, router])

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {verificationStatus === "success" && (
        <p>Your email has been verified! Redirecting...</p>
      )}
      {verificationStatus === "error" && (
        <p>There was an issue verifying your email. Please try again.</p>
      )}
      {!verificationStatus && <p>Verifying your email...</p>}
    </div>
  )
}
