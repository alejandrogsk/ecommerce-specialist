import Image from 'next/image'
import React, {ReactElement} from 'react'

export interface HomePlatforms {
    alt:string;
    src:string;
    width: number;
}

interface PlatformsProps {
    platforms: HomePlatforms[];
}

const Platforms = ({platforms}: PlatformsProps):ReactElement => {
  return (
    <section className='relative grid grid-cols-2 lg:grid-cols-4 mt-60 mb-40 items-center justify-items-center	'>
          {
            platforms.map((platform, index) => {
              return(
                <div key={index}>
                <Image 
                  src={platform.src}
                  alt={platform.alt} 
                  height={100}
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