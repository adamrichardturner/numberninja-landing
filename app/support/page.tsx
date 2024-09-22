"use client"

import SupportForm from "@/components/SupportForm/SupportForm"

const Support = () => {
  return (
    <div className='container flex flex-col gap-4 justify-center items-center w-full min-h-screen px-6'>
      <h1 className='text-2xl font-bold'>Support</h1>
      <p className='text-sm text-gray-500 max-w-lg text-center'>
        Have a question or need help with Number Ninja? We&apos;re here to help!
        If you need to contact us, please use the form below. If you want to
        delete your account, please include your email address used for
        registration and we will delete your account within 3 business days.
      </p>
      <SupportForm />
    </div>
  )
}

export default Support
