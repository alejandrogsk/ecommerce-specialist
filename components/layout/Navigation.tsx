import React from 'react'

const Navigation = () => {
  return (
    <header className='z-50 px-12 py-4 flex items-center justify-between'>
        <span className='text-2xl'>Alejandro Suarez</span>

        <nav>
            <ul className='flex'>
                <li><a className='text-xl text-black hover:text-primary mr-4' href="#">for who</a></li>
                <li><a className='text-xl text-black hover:text-primary mr-4' href="#">services</a></li>
                <li><a className='text-xl text-black hover:text-primary' href="#">recent</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation