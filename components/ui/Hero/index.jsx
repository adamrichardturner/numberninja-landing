
import Image from "next/image";
import Footer from "../Footer"

const Hero = () => (
  <div className="min-h-screen flex flex-col justify-center items-center">
    <section className="bg-white px-6 flex items-center justify-center">
    <div className="text-gray-600">
      <div className="space-y-4 max-w-4xl mx-auto text-center">
        <div className="flex justify-center">
          <Image src="/logo-splash.svg" alt="Number Ninja" width={500} height={500} />
        </div>
        <h1 className="text-4xl font-bold text-black">Number Ninja Math Game</h1>
        <p className="text-sm md:text-md max-w-xl mx-auto">
          Master math like a ninja! Challenge your skills with Number Ninja Math Game—packed with fun, challenging arithmetic puzzles designed to help kids and adults alike reach their full potential and sharpen their math abilities.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <div>
            <Image src="/comingsoon.png" alt="Play and App Store Coming Soon" width={162} height={60} />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  </div>
);

export default Hero;
