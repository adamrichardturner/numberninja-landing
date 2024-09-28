"use client"

import SupportForm from "@/components/SupportForm/SupportForm"

const Support = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full min-h-screen px-6'>
      <h1 className='text-2xl font-bold'>Support</h1>
      <p className='text-sm text-gray-500 max-w-lg text-center'>
        Have a question or need help with Number Ninja? We&apos;re here to help!
        <br />
        <br />
        Please use the form below for support requests. If you want to delete
        your account and data, please include your email address used for
        registration, indicating you would like to delete your account and we
        will delete your account within 3 business days.
      </p>
      <SupportForm />
    </div>
  )
}

export default Support
