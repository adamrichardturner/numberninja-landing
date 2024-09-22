import Head from "next/head"
import Hero from "../components/ui/Hero"

export default function HomePage() {
  return (
    <>
      <div className='container'></div>

      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
    </>
  )
}
