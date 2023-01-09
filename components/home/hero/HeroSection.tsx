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
      mockup: { alt:string; src:string; width:string; height:string},
      image: { alt:string; src:string; width:string; height:string}
    }
}

interface HeroSectionProps {
    hero: HeroContent;
}
const HeroSection = ({hero}:HeroSectionProps ): ReactElement => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='px-4 md:px-8 lg:px-12'>
          <h1 className='mt-20 md:mt-32 lg:mt-40 text-black font-bold uppercase text-3xl md:text-4xl lg:text-5xl'>{hero.title}</h1>
          <p className='text-base md:text-lg lg:text-xl my-8'>{hero.subtitle}</p>
          
          {
            <ContactCard contact={hero.contact}/>
          }

          <a href="#services" className='text-center inline-block mt-12 text-base md:text-lg lg:text-xl block	bg-black hover:bg-primary linear duration-300 rounded	py-4 px-6 uppercase text-white cursor-pointer	'>
            {hero.cta.title}
          </a>

        </div>

        <div className=' mt-20 md:mt-0 px-8  md:px-12'>
          <div className='flex align-center justify-center'>
            <div className='translate-x-[15px] md:translate-x-[50px]  translate-y-[0px] md:translate-y-[75px]'>
              <Image 
                src={hero.images.mockup.src} 
                width={hero.images.mockup.width} 
                height={hero.images.mockup.height} 
                layout='intrinsic'
              />  
            </div>
            <div className='translate-x-[-15px] md:translate-x-[-50px]  translate-y-[-25px] md:translate-y-[50px]'>
              <Image 
                src={hero.images.image.src} 
                width={hero.images.image.width} 
                height={hero.images.image.height} 
                layout='intrinsic'
              />  
            </div>
          </div>
        </div>

       </section>
  )
}

export default HeroSection