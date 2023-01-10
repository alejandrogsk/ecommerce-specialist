import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement, useRef } from 'react'
import {ServiceI} from "../../types/Services"
import DesignServices from './services/DesignServices';
import DevelopmentServices from './services/DevelopmentServices';
import OtherServices from './services/OtherServices';

interface ServicesProps {
    services: {
      title: string;
      design:ServiceI;
      development: ServiceI;
      other: ServiceI;
    };
}

const Services = ({services}: ServicesProps): ReactElement => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  return (
    <section id="services" className='home-services-section min-h-screen px-8 md:px-12 lg:px-28 py-40 grid grid-cols-1 justify-center align-center'>
        <h2 
        ref={titleRef}
        style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: `all 500ms`,
        }}
        className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>{services.title}</h2>

        
        
        {/**Design Service */}
        <DesignServices service={services.design} />
        <DevelopmentServices service={services.development}/>
        <OtherServices service={services.other}/>
        


      </section>
  )
}

export default Services