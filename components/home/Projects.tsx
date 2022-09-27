import Image from 'next/image'
import React from 'react'

const Projects = ({projects}:any) => {
  return (
    <section id="proejcts" className='relative bg-gray-light px-8 md:px-12 lg:px-28 py-40'>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-0 md:pb-8 lg:pb-16">
            Recent Projects    
        </h2>
        <div className=' grid gap-16 md:gap-0 grid-cols-1 md:grid-cols-2 my-16'>
            <div>
                <Image
                src={projects.designs[0].src}
                width={1239} height={663} 
                />
                <h3 className='text-xl text-center mt-6 md:mt-12'>Ecommerce design for a fashion store <a className='text-primary cursor-pointer'>Open in figma.</a></h3>
            </div>
            <div>
            <Image
                src={projects.designs[1].src}
                width={1239} height={663} 
                />
                <h3 className='text-xl text-center mt-6 md:mt-12'>Ecommerce design for a liquor store <a className='text-primary cursor-pointer'>Open in figma.</a></h3>
            
            </div>
        </div>
        <svg className='projects-svg' width="185" height="158" viewBox="0 0 185 158" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    </section>
  )
}

export default Projects