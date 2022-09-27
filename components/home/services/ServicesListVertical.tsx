import React, { ReactElement } from 'react'
import { ServiceI } from "../../../types/Services";
interface ServiceListVerticalProps {
    service: ServiceI;
}
const ServicesListVertical = ({service}: ServiceListVerticalProps): ReactElement => {
    const { title, list, ctaVertical } = service;
    return (
    <div className='grid grid-cols-[35px_1fr]'>
                <h3 className="col-start-2 col-end-3 text-2xl lg:text-3xl uppercase font-semibold">
                    {title}
                </h3>
                <div className="grid grid-cols-1 col-start-1 col-end-3">
                    {list.map((service, index) => (
                        <div key={index} className="grid gap-1 auto-cols-auto  mt-6  pb-4 last:border-none">
                           <span className='col-start-1 col-end-2 block h-8 w-8 pt-0 md:pt-1'>
                           <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9 6.20302C20.0066 6.09422 20.1339 6.00778 20.2744 5.94878C20.4148 5.88977 20.5656 5.85938 20.718 5.85938C20.8703 5.85938 21.0211 5.88977 21.1616 5.94878C21.302 6.00778 21.4293 6.09422 21.5359 6.20302C21.9828 6.65458 21.9891 7.38427 21.5516 7.84365L12.3125 18.7655C12.2076 18.8807 12.0803 18.9733 11.9384 19.0376C11.7965 19.1019 11.643 19.1366 11.4872 19.1395C11.3314 19.1424 11.1767 19.1135 11.0325 19.0546C10.8883 18.9957 10.7576 18.9079 10.6484 18.7968L5.02656 13.0999C4.80975 12.8788 4.68829 12.5815 4.68829 12.2718C4.68829 11.9621 4.80975 11.6648 5.02656 11.4436C5.1332 11.3348 5.26047 11.2484 5.40092 11.1894C5.54137 11.1304 5.69219 11.1 5.84453 11.1C5.99688 11.1 6.14769 11.1304 6.28814 11.1894C6.4286 11.2484 6.55587 11.3348 6.6625 11.4436L11.4312 16.2765L19.8687 6.2374C19.8785 6.22532 19.8889 6.21384 19.9 6.20302Z" fill="#F93943"/>
</svg>
                           </span>
                            <div className='col-start-2 col-end-3'>
                            <h4 className="text-xl lg:text-2xl font-medium">
                                {service.title}
                            </h4>
                            <p className="text-lg lg:text-xl mt-2">{service.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    
                    ctaVertical&&
                <a  href={ctaVertical.link} className="text-center inline-block col-start-2 col-end-3 w-44	 font-medium mt-12 text-base md:text-lg lg:text-xl block  hover:text-white bg-black	hover:bg-primary linear duration-300 rounded text-white py-4 px-6 uppercase cursor-pointer	">
                    {ctaVertical.title}
                </a>
                }
            </div>
  )
}

export default ServicesListVertical