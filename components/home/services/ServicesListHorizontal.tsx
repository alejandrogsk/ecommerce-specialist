import { useInView } from "framer-motion";
import React, { ReactElement, useRef } from "react";
import { ServiceListI } from "../../../types/Services";
import  ServiceItem from "./animated/ServiceItem";
interface ServiceListHorizontalProps {
    services?: ServiceListI[];
    cta?: { title:string; link:string }
}
const ServicesListHorizontal = ({
    services,
    cta
}: ServiceListHorizontalProps): ReactElement => {
    return (
        <div className="relative  md:col-span-2 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {
                    
                }
                    {services?.map((service, index) => (

<ServiceItem service={service} key={index}/>
                    ))}
                    {
                        cta && <ServiceListHorizontalCta cta={cta}/>
                       
                    }
                </div>
        </div>
       
    );
};

const ServiceListHorizontalCta = ({cta}:any) => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return(
         <div
         ref={ref}
         style={{
             transform: isInView ? "none" : "translateY(100px)",
             opacity: isInView ? 1 : 0,
             transition: `all 500ms`,
         }}
          className="col-start-1 col-end-2 md:col-end-4 flex align-center justify-center mt-0 md:mt-8 lg:mt-16">
         <a href={cta.link}
         className="text-center inline-block	 font-medium mt-12 text-base md:text-lg lg:text-xl block  hover:text-white bg-black	hover:bg-primary linear duration-300 rounded text-white py-4 px-8 uppercase cursor-pointer	"
     >
         {cta.title}
     </a>
     </div>
    )
}

export default ServicesListHorizontal;
