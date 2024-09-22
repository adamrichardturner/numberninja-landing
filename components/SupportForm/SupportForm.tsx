"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import Link from "next/link"
function SupportForm() {
  const [state, handleSubmit] = useForm("mvgpjbpy")
  return (
    <div className='container flex flex-col gap-4 max-w-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-sm text-gray-500'>
            Email Address
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='border border-gray-300 rounded-md p-2'
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='message' className='text-sm text-gray-500'>
            Support Request
          </label>
          <textarea
            id='message'
            name='message'
            className='border border-gray-300 rounded-md p-2'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <button
          type='submit'
          disabled={state.submitting}
          className='bg-black text-white rounded-md p-2 mt-6'
        >
          Submit
        </button>
      </form>
      <div className='flex flex-col gap-2 w-full text-center text-sm mt-6 underline'>
        <Link href='/'>Back to Home</Link>
      </div>
    </div>
  )
}

export default SupportForm
