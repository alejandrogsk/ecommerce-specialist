import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'


const ServicesSingleImage = ({image}:any) => {
    const { src,alt,width,height } = image;
    const imageRef = useRef(null);
    const isInView = useInView(imageRef, { once: true });

    return(
        <div 
                    ref={imageRef}
                    style={{
                        transform: isInView ? "none" : "translateY(300px)",
                        opacity: isInView ? 1 : 0,
                        transition: `all 700ms`,
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        layout="intrinsic"
                        />
                </div>
    )
}

export default ServicesSingleImage