import Image from "next/image";
import React, { ReactElement } from "react";
import ServicesListVertical from "./ServicesListVertical";
import {ServiceI} from "../../../types/Services";
interface DesignServicesProps {
    service: ServiceI;
}
const DesignServices = ({service}:DesignServicesProps): ReactElement => {
    return(
        <div className="home-design-section relative grid gap-16 md:gap-0 grid-cols-1 md:grid-cols-2 py-16 md:py-28 lg:py-40">
        
        {/**Content */}
        <ServicesListVertical
            service={service}
        />
        {/**Images */}
        <div className="relative my-16 md:my-0">
            <div className="relative flex justify-center align-center">

                    <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        width="253"
                        height="550"
                        layout="intrinsic"
                    />
                
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
                <svg
                    className="squares-1"
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_160_474)">
                        <rect width="5" height="5" rx="2.5" fill="white" />
                        <rect
                            x="35"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            x="70"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            y="35"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            x="35"
                            y="35"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            x="70"
                            y="35"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            y="70"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            x="35"
                            y="70"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                        <rect
                            x="70"
                            y="70"
                            width="5"
                            height="5"
                            rx="2.5"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_160_474">
                            <rect width="75" height="75" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>

        <svg className="points-grid" width="185" height="158" viewBox="0 0 185 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="140" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="175" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect y="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="35" y="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="70" y="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="105" y="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="140" y="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="175" y="35" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect y="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect y="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect y="140" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="35" y="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="35" y="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="35" y="140" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="70" y="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="70" y="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="70" y="140" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="105" y="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="105" y="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="105" y="140" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="140" y="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="140" y="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="140" y="140" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="175" y="70" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="175" y="105" width="5" height="5" rx="2.5" fill="#F93943"/>
<rect x="175" y="140" width="5" height="5" rx="2.5" fill="#F93943"/>
</svg>

        </div>
    );
};

export default DesignServices;
