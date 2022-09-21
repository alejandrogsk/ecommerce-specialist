import React, {ReactElement} from 'react'

const ContactCard = ({contact}:any ): ReactElement => {
  console.log(contact)
  return(
    <div className='contact-card flex items-center'>
      <div className="relative mr-4 bg-[url('/suarez.jpg')] h-16 md:h-20 w-16 md:w-20 block bg-cover bg-center rounded-full">
        <span className='contact-card__circle absolute block h-3 md:h-4 w-3 md:w-4 bg-green-light rounded-full border-[1px] md:border-2 border-white '></span>
      </div>      
      <span className='hover:-translate-y-1.5	linear duration-300 cursor-pointer text-base md:text-lg lg:text-xl text-black'>{contact.title}</span>
    </div>
  );
};

export default ContactCard;