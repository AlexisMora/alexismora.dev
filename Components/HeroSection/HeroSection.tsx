import React from 'react'
import MailLink from '../Common/MailLink/MailLink'

const HeroSection = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-start">
      <div className="md:mx-48">
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl md:text-7xl font-GT-America-Expanded font-black">
            Alexis Mora
          </h1>
          <h2 className="text-zinc-300 text-2xl md:text-3xl font-GT-America-Expanded font-extrabold">
            Frontend Engineer
          </h2>
          <div className="mt-2">
            <p className="text-white text-xl md:text-2xl md:w-9/12 font-GT-America-Standard">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building the future of Hotel booking process at
              <a href="https://hotelverse.tech/" className="ml-1 text-primary">
                Hotelverse.
              </a>
            </p>
          </div>
        </div>
        <div className="mt-7 flex justify-center md:justify-start">
          <MailLink />
        </div>
      </div>
    </main>
  )
}

export default HeroSection
