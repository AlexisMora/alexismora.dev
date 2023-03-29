import React from 'react'
import MailLink from '../Common/MailLink/MailLink'
import SectionTitle from '../Common/SectionTitle/SectionTitle'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-start text-white"
    >
      <div className="md:w-1/2 h-100 w-full">
        <SectionTitle title="Contact" />
        <div>
          <div className="mt-2 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-md md:text-lg md:w-1/2 font-GT-America-Standard">
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you!
            </p>
            <MailLink />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
