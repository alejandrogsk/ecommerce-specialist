import React, { ReactElement } from 'react'
import Form from './contact/Form'
import { ContactI } from "../../types/Contact";

interface ContactProps {
  contact: ContactI
}
const Contact = ({contact}:ContactProps):ReactElement => {
  return (
    <section id="contact" className='bg-black py-28 md:py-36 lg:py-40 relative'>
        <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>{contact.title}</h2>
        <p className='py-8 text-center text-white text-lg md:text-xl lg:text-2xl'>{contact.subtitle}</p>
        <Form formData={contact.form}/>
        <svg className='contact-section-svg' width="150" height="530" viewBox="0 0 150 530" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="265" cy="265" r="263.5" stroke="#F93943" strokeWidth="3" strokeDasharray="6 6"/>
          <circle cx="274" cy="261" r="233.5" stroke="#F93943" strokeWidth="3" strokeDasharray="6 6"/>
          <circle cx="274" cy="261" r="203.5" stroke="#F93943" strokeWidth="3" strokeDasharray="6 6"/>
        </svg>
    </section>
  )
}

export default Contact