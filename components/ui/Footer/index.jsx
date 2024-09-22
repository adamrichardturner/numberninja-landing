"use client"

import Link from "next/link"

const date = new Date().getFullYear()

const Footer = () => (
    <footer>
        <div className="custom-screen pt-8">
            <div className="mt-0 py-4 border-t items-center justify-center sm:flex">
                <p className="text-gray-600 text-center">{`© ${date} `} <a className="font-semibold" href="https://adamrichardturner.dev" target="_blank" rel="noreferrer">Adam Richard Turner.</a> All rights reserved.</p>
            </div>
            <div className="flex flex-row gap-4 text-center justify-center text-xs">
                <Link href="/privacy">Privacy Policy</Link> |
                <Link href="/terms">Terms of Service</Link> |
                <Link href="/support">Contact</Link>
            </div>
        </div>
    </footer>
)

export default Footer