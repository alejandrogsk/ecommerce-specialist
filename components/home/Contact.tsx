import React, { ReactElement } from 'react'
import Form from './contact/Form'
import { ContactI } from "../../types/Contact";

interface ContactProps {
  contact: ContactI
  locale: string
}
const Contact = ({contact,locale}:ContactProps):ReactElement => {
  return (
    <section id="contact" className='bg-black py-28 md:py-36 lg:py-40 relative'>
        <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>{contact.title}</h2>
        <p className='py-8 text-center text-white text-lg md:text-xl lg:text-2xl'>{contact.subtitle}</p>
        <Form formData={contact.form} locale={locale}/>
        <svg className='contact-section-svg' width="150" height="530" viewBox="0 0 150 530" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="265" cy="265" r="263.5" stroke="#F93943" strokeWidth="3" strokeDasharray="6 6"/>
          <circle cx="274" cy="261" r="233.5" stroke="#F93943" strokeWidth="3" strokeDasharray="6 6"/>
          <circle cx="274" cy="261" r="203.5" stroke="#F93943" strokeWidth="3" strokeDasharray="6 6"/>
        </svg>
    </section>
    // <section id="contact" className='bg-black min-h-80 flex flex-col justify-center items-center pt-40 pb-20'>
    //   <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>{contact.title}</h2>
    //   <p className='py-8 text-center text-white text-lg md:text-xl lg:text-2xl'>{contact.subtitle}</p>
    //   <a rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~0151c39a3d218a5ba5?viewMode=1" target="_blank" className='hover:bg-primary linear duration-300 cursor-pointer font-medium uppercase text-base md:text-lg lg:text-xl w-80 text-center py-4 rounded inline-block text-white border-2 border-primary'>Contact me on upwork</a> 
    // </section>
  )
}

export default Contact