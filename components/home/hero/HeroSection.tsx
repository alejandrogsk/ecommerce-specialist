import Image from 'next/image';
import React, {ReactElement} from 'react'
import ContactCard from './ContactCard';
export interface HeroContent {
    title: string;
    subtitle: string;
    contact: {
      title: string;
      link: string;
    },
    cta: {
      title: string;
      link: string;
    },
    images: {
      mockup: { alt:string; src:string;},
      image: { alt:string; src:string;}
    }
}

interface HeroSectionProps {
    hero: HeroContent;
}
const HeroSection = ({hero}:HeroSectionProps ): ReactElement => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='px-4 md:px-8 lg:px-12'>
          <h1 className='mt-40 text-black font-bold uppercase text-3xl md:text-4xl lg:text-5xl'>{hero.title}</h1>
          <p className='text-base md:text-lg lg:text-xl my-8'>{hero.subtitle}</p>
          
          {
            <ContactCard contact={hero.contact}/>
          }

          <button className='mt-12 text-base md:text-lg lg:text-xl block	bg-black hover:bg-primary linear duration-300 rounded	py-4 px-6 uppercase text-white cursor-pointer	'>
            {hero.cta.title}
          </button>

        </div>

        <div className='relative min-h-screen md:min-h-auto mt-20 md:mt-0'>
          <div className='absolute hero-phone'>
            <Image 
            src={hero.images.image.src} 
              width="482.24" 
              height="708" 
              layout='intrinsic'
            />  
          </div>
        </div>

       </section>
  )
}

export default HeroSection