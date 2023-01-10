import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const TitleH3Animated = ({title}:any) => {
const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  return (
    <h2 
    ref={titleRef}
    style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: `all 500ms`,
    }}
    className="col-start-2 col-end-3 text-2xl lg:text-3xl uppercase font-semibold">{title}</h2>
  )
}

export default TitleH3Animated