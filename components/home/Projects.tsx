import Image from 'next/image'
import React from 'react'

const Projects = ({projects}:any) => {
  return (
    <section className='bg-gray-light py-28 md:py-36 lg:py-40'>

        <div className='grid gap-16 md:gap-0 grid-cols-1 md:grid-cols-2'>
            <div>
                <Image
                src={projects.designs[0].src}
                width={1239} height={663} />
            </div>
            <div>
            <Image
                src={projects.designs[1].src}
                width={1239} height={663} />
            </div>
        </div>

    </section>
  )
}

export default Projects