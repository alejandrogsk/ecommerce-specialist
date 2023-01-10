import Image from "next/image";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
export interface HomePlatforms {
    alt: string;
    src: string;
    width: number;
    height: number;
}

interface PlatformsProps {
    platforms: HomePlatforms[];
}

const Platforms = ({ platforms }: PlatformsProps): ReactElement => {
    return (
        <section className="relative grid px-8 md:px-4 lg:px-0 gap-8 md:gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-4 mt-28 lg:mt-60 mb-40 items-center justify-items-center	">
            {platforms.map((platform, index) => (
                <PlatformItem platform={platform} position={index} key={index} />
            ))}
        </section>
    );
};

//Reibo la data (platform) y la posición osea el KEY (position)
interface PlatformItem {
  platform:HomePlatforms;
  position: number;
}
const PlatformItem = ({ platform, position }: PlatformItem): ReactElement => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let animationMultiply;
  (position!==0)? animationMultiply=(500+(position*100)): animationMultiply=500;
  return (
    <div 
    ref={ref}
    style={{
      transform: isInView ? "none" : "translateY(300px)",
      opacity: isInView ? 1 : 0,
      transition: `all ${animationMultiply}ms `,
    }}
    >
      <Image
        src={platform.src}
        alt={platform.alt}
        height={platform.height}
        width={platform.width}
        layout="intrinsic"
      />
    </div>
  );
};

export default Platforms;
