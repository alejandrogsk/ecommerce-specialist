import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement, useRef } from 'react'
import { ServiceI } from '../../../types/Services';
import ServicesListVertical from './ServicesListVertical'; 

interface DevelopmentServicesProps {
    service: ServiceI;
}
const DevelopmentServices = ({ service }: DevelopmentServicesProps): ReactElement => {
    return (
    <div className="home-development-section grid gap-16 md:gap-0 grid-cols-1 md:grid-cols-2 py-16 lg:py-28 md:py-40">
    
    {/**Images */}
    <div className="relative row-start-2 md:row-start-1 ">
        <div className="relative flex justify-center align-center my-16 md:my-0">

        <ServicesDoubleImages image={service.images.image} mockup={service.images.mockup}/>
            
            <svg
                className="blob-1"
                width="696"
                height="775"
                viewBox="0 0 696 775"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M359.144 0.0173365C508.518 1.63279 613.543 126.768 661.738 266.426C712.711 414.136 718.894 587.389 595.452 684.791C455.83 794.96 252.503 808.696 110.815 701.132C-21.6283 600.585 -19.7167 415.391 35.444 259.653C86.1882 116.385 205.482 -1.64448 359.144 0.0173365Z"
                    fill="#F93943"
                />
            </svg>
            <svg className='cross1' width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80.5347 80.5347L60.5 60.5M60.5 60.5L40.4653 40.4653M60.5 60.5L80.5347 40.4653M60.5 60.5L40.4653 80.5347" stroke="white" strokeWidth="6" strokeLinecap="round"/>
</svg>
<svg className='cross2' width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80.5347 80.5347L60.5 60.5M60.5 60.5L40.4653 40.4653M60.5 60.5L80.5347 40.4653M60.5 60.5L40.4653 80.5347" stroke="white" strokeWidth="6" strokeLinecap="round"/>
</svg>
        </div>
    </div>
    {/**Content */}
    <ServicesListVertical service={service} />
</div>
  )
}

const ServicesDoubleImages = ({image, mockup}:any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='flex align-center justify-center'>
            <div 
            ref={ref}
            style={{
              transform: isInView ? "translate(25px, -25px)" : "translate(25px, 300px)",
              opacity: isInView ? 1 : 0,
              transition: `all 700ms`,
          }}
            //className='translate-x-[15px] md:translate-x-[50px]  translate-y-[0px] md:translate-y-[75px]'
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
              transform: isInView ? "translate(-25px, 0px)" : "translate(-25px, 300px)",
              opacity: isInView ? 1 : 0,
              transition: `all 700ms`,
          }}
            className='translate-x-[-15px] md:translate-x-[-50px]  translate-y-[-25px] md:translate-y-[50px]'>
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

export default DevelopmentServices