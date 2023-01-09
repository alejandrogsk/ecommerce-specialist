import Image from 'next/image'
import React, {ReactElement} from 'react'

export interface HomePlatforms {
    alt:string;
    src:string;
    width: number;
    height:number;
}

interface PlatformsProps {
    platforms: HomePlatforms[];
}

const Platforms = ({platforms}: PlatformsProps):ReactElement => {
  return (
    <section className='relative grid px-8 md:px-4 lg:px-0 gap-8 md:gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-4 mt-28 lg:mt-60 mb-40 items-center justify-items-center	'>
          {
            platforms.map((platform, index) => {
              return(
                <div key={index} >
                  <Image 
                    src={platform.src}
                    alt={platform.alt} 
                    height={platform.height}
                    width={platform.width}
                    layout='intrinsic'
                  />
                </div>
              )
            })
          }
       </section>
  )
  
}

export default Platforms