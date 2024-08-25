"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { getAuth, applyActionCode } from "firebase/auth"

function VerifyEmail() {
  const [status, setStatus] = useState("Verifying...")
  const searchParams = useSearchParams()
  const oobCode = searchParams.get("oobCode")
  const redirectUrl = searchParams.get("redirect")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!oobCode || !redirectUrl) return

      const auth = getAuth()

      try {
        // Ensure we only run this logic once
        if (auth.currentUser && auth.currentUser.emailVerified) {
          window.location.href = redirectUrl as string
          return
        }

        await applyActionCode(auth, oobCode as string)
        setStatus("Email verified! Redirecting...")

        // Redirect to the app using the deep link
        window.location.href = redirectUrl as string
      } catch (error) {
        console.error("Error verifying email:", error)
        setStatus("Error verifying email. Please try again.")
      }
    }

    verifyEmail()
  }, [oobCode, redirectUrl])

  return <div>{status}</div>
}

// The Suspense boundary should wrap the main component in the page function.
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail />
    </Suspense>
  )
}
