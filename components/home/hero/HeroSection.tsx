import Image from 'next/image';
import React, {ReactElement, useRef} from 'react'
import ContactCard from './ContactCard';
import { motion, AnimatePresence, useInView } from "framer-motion"

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

          <motion.h1 
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition:{duration:1} }}
          className='mt-20 md:mt-32 lg:mt-40 text-black font-bold uppercase text-3xl md:text-4xl lg:text-5xl'>{hero.title}</motion.h1>
          <motion.p 
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition:{duration:1} }}
          className='text-base md:text-lg lg:text-xl my-8'>{hero.subtitle}</motion.p>
          
          {
            <ContactCard contact={hero.contact} />
          }

          <motion.a href="#services" 
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition:{duration:1} }}
          className='text-center inline-block mt-12 text-base md:text-lg lg:text-xl block	bg-black hover:bg-primary linear duration-300 rounded	py-4 px-6 uppercase text-white cursor-pointer	'>
            {hero.cta.title}
          </motion.a>
        </div>

        <div className=' mt-20 md:mt-0 px-8  md:px-12'>
          <HomeHeroImages mockup={hero.images.mockup} image={hero.images.image} />
          {/* <div className='flex align-center justify-center'>
            <motion.div 
            initial={{ x: 25, y: 375, opacity: 0 }}
            animate={{ y:75, opacity: 1, transition:{ duration:1} }}
            //className='translate-x-[15px] md:translate-x-[50px]  translate-y-[0px] md:translate-y-[75px]'
            >
              <Image 
                src={hero.images.mockup.src} 
                width={hero.images.mockup.width} 
                height={hero.images.mockup.height} 
                layout='intrinsic'
              />  
            </motion.div>
            <motion.div 
            initial={{ x:-25, y: 350, opacity: 0 }}
            animate={{ y: 50, opacity: 1, transition:{duration:1, delay: 0.5} }}
            
            //className='translate-x-[-15px] md:translate-x-[-50px]  translate-y-[-25px] md:translate-y-[50px]'
            >
              <Image 
                src={hero.images.image.src} 
                width={hero.images.image.width} 
                height={hero.images.image.height} 
                layout='intrinsic'
              />  
            </motion.div>
          </div> */}
        </div>

       </section>
  )
}

export default HeroSection



const HomeHeroImages = ({image, mockup}:any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className='flex align-center justify-center'>
            <div 
            ref={ref}
            style={{
              transform: isInView ? "translate(25px, 75px)" : "translate(25px, 300px)",
              opacity: isInView ? 1 : 0,
              transition: `all 1s`,
          }}
          >
            
  
              <Image 
               src={mockup.src} 
               width={mockup.width} 
               height={mockup.height} 
               alt={mockup.alt}
                layout='intrinsic'
              />  
            </div>
          <div 
            style={{
              transform: isInView ? "translate(-25px, 50px)" : "translate(-25px, 300px)",
              opacity: isInView ? 1 : 0,
              transition: `all 1s`,
              transitionDelay: '300ms'
            }}
          >
            <Image 
                src={image.src} 
                width={image.width} 
                height={image.height} 
                alt={image.alt}
                layout='intrinsic'
              />
            </div>
          </div>
  )
}