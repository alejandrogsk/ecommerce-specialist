import React from 'react'

const Contact = () => {
  return (
    <section className='bg-black py-28 md:py-36 lg:py-40'>
        <form className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 px-4 md:mx-12 lg:mx-20'>
            <input 
                type="text"
                placeholder="Name"
                className='text-white text-2xl font-semibold bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <input 
                type="text"
                placeholder="Last Name"
                className='text-white text-2xl font-semibold bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <input 
                type="text"
                placeholder="Email"
                className='text-white text-2xl font-semibold bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <input 
                type="text"
                placeholder="Phone"
                className='text-white text-2xl font-semibold bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <textarea 
                placeholder="Message"
                className='col-start-1 col-end-3 text-white text-2xl font-semibold bg-black border-b-2 border-white border-solid focus:outline-none'
                name="message"
            />
            <button className='border-2 border-primary text-white text-2xl font-semibold bg-black'>
                Submit
            </button>
        </form>
    </section>
  )
}

export default Contact