import React, {ReactElement} from 'react'

const ContactCard = ({contact}:any ): ReactElement => {
  console.log(contact)
  return(
    <div className='contact-card flex items-center'>
      <div className="relative mr-4 bg-[url('/suarez.jpg')] h-20 w-20 block bg-cover bg-center rounded-full">
        <span className='contact-card__circle absolute block h-4 w-4 bg-green-light rounded-full border-2 border-white '></span>
      </div>      
      <span className='hover:-translate-y-1.5	linear duration-300 cursor-pointer text-xl text-black'>{contact.title}</span>
    </div>
  );
};

export default ContactCard;