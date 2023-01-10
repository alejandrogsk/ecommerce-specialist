import { useInView } from 'framer-motion';
import React, { ReactElement, useRef } from 'react'
import { ServiceI, ServiceListI } from "../../../types/Services";
import TitleH3Animated from './animated/TitleH3Animated';
import ServiceItem from './animated/ServiceItem';
interface ServiceListVerticalProps {
    service: ServiceI;
}
const ServicesListVertical = ({service}: ServiceListVerticalProps): ReactElement => {
    const { title, list, ctaVertical } = service;

    return (
    <div className='grid grid-cols-[35px_1fr]'>
                <TitleH3Animated title={title} />

                <div className="grid grid-cols-1 col-start-1 col-end-3">
                    {list.map((service, index) => (
                         <ServiceItem service={service} key={index} />
                    ))}
                </div>
                {
                    
                    ctaVertical&& <ServiceListVerticalCta  ctaVertical={ctaVertical}/>

                }
            </div>
  )
}



const ServiceListVerticalCta = ({ctaVertical}:any) => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return(
        <div ref={ref}
        style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: `all 500ms`,
        }}
        className='col-start-2 col-end-3 mt-4'>
            <a  href={ctaVertical.link} className="text-center inline-block font-medium mt-12 text-base md:text-lg lg:text-xl block  hover:text-white bg-black	hover:bg-primary linear duration-300 rounded text-white py-4 px-8 uppercase cursor-pointer	">
            {ctaVertical.title}
            </a>
        </div>
    )
}

export default ServicesListVertical