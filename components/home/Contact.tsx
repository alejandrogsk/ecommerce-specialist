import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='bg-black py-28 md:py-36 lg:py-40'>
        <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>I want to know more about your project</h2>
        <p className='py-8 text-center text-white text-lg md:text-xl lg:text-2xl'>Please complete the form and I will answer you as soon as possible.</p>
        <form className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 px-4 md:mx-12 lg:mx-20'>
            <input 
                type="text"
                placeholder="Name"
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <input 
                type="text"
                placeholder="Last Name"
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <input 
                type="email"
                placeholder="Email"
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <input 
                type="text"
                placeholder="Phone"
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name="name"
            />
            <div>
            <label 
            className='text-md md:text-lg lg:text-xl inline-block border-2 border-white rounded p-2 cursor-pointer text-white i'
            htmlFor="requirementsFile">Do you have any specific requirements?</label>
            <input className='hidden' name="requirementsFile" id="requirementsFile" type="file" accept="application/pdf,application/vnd.ms-excel" />
            </div>
            <textarea 
                placeholder="Message"
                className='col-start-1 col-end-2 md:col-end-3 text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name="message"
            />
            <button className='inline-block p-2 rounded border-2 border-primary text-white text-lg md:text-xl lg:text-2xl font-medium bg-black'>
                Submit
            </button>
        </form>
    </section>
  )
}

export default Contact