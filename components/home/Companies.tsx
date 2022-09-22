import React, { ReactElement } from "react";

export interface HomeCompanies {
    title: string;
    list: string[];
}

interface CompaniesProps {
    companies: HomeCompanies;
}

const Companies = ({ companies }: CompaniesProps): ReactElement => {
    return (
        <section  id="companies" className="min-h-screen home-companies-section relative bg-black px-8 md:px-12 lg:px-20 py-40 grid grid-cols-1 justify-center align-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
                {companies.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                {companies.list.map((companyType, index) => (
                    <div
                        key={index}
                        className="grid grid-flow-col auto-cols-auto gap-4"
                    >
                        <span className="mt-2 flex justify-center items-center h-8 w-8 rounded-full border-[1px] md:border-2 border-transparent md:border-white">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.9 6.20302C20.0066 6.09422 20.1339 6.00778 20.2744 5.94878C20.4148 5.88977 20.5656 5.85938 20.718 5.85938C20.8703 5.85938 21.0211 5.88977 21.1616 5.94878C21.302 6.00778 21.4293 6.09422 21.5359 6.20302C21.9828 6.65458 21.9891 7.38427 21.5516 7.84365L12.3125 18.7655C12.2076 18.8807 12.0803 18.9733 11.9384 19.0376C11.7965 19.1019 11.643 19.1366 11.4872 19.1395C11.3314 19.1424 11.1767 19.1135 11.0325 19.0546C10.8883 18.9957 10.7576 18.9079 10.6484 18.7968L5.02656 13.0999C4.80975 12.8788 4.68829 12.5815 4.68829 12.2718C4.68829 11.9621 4.80975 11.6648 5.02656 11.4436C5.1332 11.3348 5.26047 11.2484 5.40092 11.1894C5.54137 11.1304 5.69219 11.1 5.84453 11.1C5.99688 11.1 6.14769 11.1304 6.28814 11.1894C6.4286 11.2484 6.55587 11.3348 6.6625 11.4436L11.4312 16.2765L19.8687 6.2374C19.8785 6.22532 19.8889 6.21384 19.9 6.20302Z"
                                    fill="#fff"
                                />
                            </svg>
                        </span>
                        <p className="text-lg md:text-xl lg:text-2xl">{companyType}</p>
                    </div>
                ))}
            </div>

            <svg
                className="home-companies-section__svg1"
                width="212"
                height="167"
                viewBox="0 0 212 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M102.628 3.14314C104.201 0.678777 107.799 0.678776 109.372 3.14314L209.369 159.848C211.068 162.511 209.156 166 205.997 166H6.0027C2.84408 166 0.931625 162.511 2.63074 159.848L102.628 3.14314Z"
                    stroke="#F93943"
                    strokeWidth="2"
                />
            </svg>

            <svg
                className="home-companies-section__svg2"
                width="212"
                height="167"
                viewBox="0 0 212 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M102.628 3.14314C104.201 0.678777 107.799 0.678776 109.372 3.14314L209.369 159.848C211.068 162.511 209.156 166 205.997 166H6.0027C2.84408 166 0.931625 162.511 2.63074 159.848L102.628 3.14314Z"
                    stroke="#F93943"
                    strokeWidth="2"
                />
            </svg>

            <span className="circle"></span>

            <svg
                className="home-companies-section__svg3"
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_160_340)">
                    <rect
                        x="105"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="70"
                        y="35"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="105"
                        y="35"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        y="105"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="35"
                        y="70"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="35"
                        y="105"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="70"
                        y="70"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="70"
                        y="105"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="105"
                        y="70"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                    <rect
                        x="105"
                        y="105"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F93943"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_160_340">
                        <rect width="110" height="110" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    );
};

export default Companies;
