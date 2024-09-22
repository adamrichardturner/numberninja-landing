import React from "react"
import { NextPage } from "next"
import Head from "next/head"

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Number Ninja Math Game</title>
      </Head>
      <div className='p-4 bg-white text-black'>
        <h1 className='text-2xl mb-2'>
          Terms and Conditions for Number Ninja Math Game
        </h1>
        <p>Last Updated: September 14, 2024</p>

        <h2 className='text-xl mt-4 mb-2'>1. User Agreement</h2>
        <p>
          These Terms and Conditions (&quot;T&amp;Cs&quot;) govern your access
          to and use of the Number Ninja Math Game app (&quot;App&quot;),
          available on the Google Playstore and Apple App Store, and its
          associated website,{" "}
          <a href='https://numberninja.app' className='text-[#7148FC]'>
            https://numberninja.app
          </a>
          &quot;(&quot;Website&quot;). By using the App or Website, you agree to
          be bound by these T&Cs. If you do not agree to these T&Cs, you may not
          use the App or Website.
        </p>
        <p>
          <strong>Key Terms</strong>
        </p>
        <ul className='list-disc list-inside'>
          <li>
            <strong>App:</strong> Refers to the Number Ninja Math Game
            application.
          </li>
          <li>
            <strong>User:</strong> Refers to any individual who accesses or uses
            the App or Website.
          </li>
          <li>
            <strong>Content:</strong> Refers to any information, text, graphics,
            images, videos, or other materials available through the App or
            Website.
          </li>
          <li>
            <strong>Services:</strong> Refers to the features and
            functionalities provided by the App or Website.
          </li>
        </ul>

        <h2 className='text-xl mt-4 mb-2'>2. User Eligibility</h2>
        <p>
          You must be at least 5 years old to use the App. If you are under 13
          years old, you must obtain parental consent before using the App. By
          using the App, you represent and warrant that you meet these age
          requirements and, if applicable, have obtained the necessary parental
          consent.
        </p>

        <h2 className='text-xl mt-4 mb-2'>
          3. Account Creation and Termination
        </h2>
        <p>
          To access certain features of the App, you may need to create an
          account. You are responsible for maintaining the confidentiality of
          your account information and for all activities that occur under your
          account.
        </p>
        <p>
          You may terminate your account at any time by following the
          instructions in the Account page of the App. Upon termination, all
          associated data will be deleted.
        </p>

        <h2 className='text-xl mt-4 mb-2'>4. App Usage</h2>
        <p>
          You may use the App for its intended purpose, which is to play the
          Number Ninja Math Game and access related features.
        </p>
        <p>You may not use the App for any illegal or unauthorized purpose.</p>
        <p>
          You may not create or share any content that is harmful, offensive, or
          infringes on the intellectual property rights of others.
        </p>

        <h2 className='text-xl mt-4 mb-2'>5. Intellectual Property</h2>
        <p>
          The App, Website, and all Content are owned by Mr. Adam Richard Turner
          and are protected by intellectual property laws.
        </p>
        <p>
          You may not copy, modify, distribute, or create derivative works based
          on the App, Website, or Content without express written permission.
        </p>

        <h2 className='text-xl mt-4 mb-2'>6. Liability and Disclaimers</h2>
        <p>
          Mr. Adam Richard Turner is not liable for any damages arising from
          your use of the App or Website.
        </p>
        <p>
          The App and Website are provided &quot;as is&quot; without any
          warranties, express or implied.
        </p>
        <p>
          You agree to indemnify and hold Mr. Adam Richard Turner harmless from
          any claims, losses, or damages arising from your use of the App or
          Website.
        </p>

        <h2 className='text-xl mt-4 mb-2'>7. Termination and Modification</h2>
        <p>
          Mr. Adam Richard Turner reserves the right to terminate or modify the
          App, Website, or Services at any time without notice.
        </p>
        <p>
          You may terminate your account at any time by following the
          instructions in the Account page of the App.
        </p>

        <h2 className='text-xl mt-4 mb-2'>
          8. Governing Law and Dispute Resolution
        </h2>
        <p>
          These T&Cs are governed by the laws of the United Kingdom. Any
          disputes arising from these T&Cs will be subject to the exclusive
          jurisdiction of the courts of the United Kingdom.
        </p>

        <h2 className='text-xl mt-4 mb-2'>9. Miscellaneous</h2>
        <p>
          You may contact Mr. Adam Richard Turner at{" "}
          <a
            href='mailto:hello@adamrichardturner.dev'
            className='text-blue-500'
          >
            hello@adamrichardturner.dev
          </a>{" "}
          for any questions or concerns regarding these T&Cs.
        </p>
        <p>
          If any provision of these T&Cs is found to be invalid or
          unenforceable, the remaining provisions will remain in full force and
          effect.
        </p>
        <p>
          These T&Cs constitute the entire agreement between you and Mr. Adam
          Richard Turner regarding your use of the App and Website.
        </p>
      </div>
    </>
  )
}

export default Terms
