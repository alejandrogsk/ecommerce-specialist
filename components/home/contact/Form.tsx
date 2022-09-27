import React from 'react'
import { useForm } from '../../../hooks/useForm';
import { FormData } from "../../../types/Contact";

interface FormProps {
    formData: FormData;
}

const Form = ({formData}:FormProps) => {
    const [formValues, handleImputChange, resetInputs] = useForm({
        userName: "Alejandro",
        userLastName: "Surez",
        userEmail: "alejandro@gmail.com",
        userPhone: "12412412",
        userCompany:"planweb.com",
        userCountry: "Usa",
        userState: "Nevada",
        userCity: "Las Vegas",
        userMessage: "Necesito un diseño",
    });

    const { userName, userLastName, userEmail, userPhone, userCompany, userMessage, userCountry, userState,userCity }:any =
        formValues;


const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues)
}
  return (
    <form onSubmit={handleSubmit} className='z-10	grid gap-y-12 gap-x-8 grid-cols-1 md:grid-cols-2 px-4 md:mx-12 lg:mx-20'>
            <input 
                type="text"
                placeholder={formData.name.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.name.name}
                id={formData.name.name}
                value={userName}
                onChange={handleImputChange}
            />
            <input 
                type="text"
                placeholder={formData.lastName.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.lastName.name}
                id={formData.lastName.name}
                value={userLastName}
                onChange={handleImputChange}
            />
            <input 
                type="email"
                placeholder={formData.email.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.email.name}
                id={formData.email.name}
                value={userEmail}
                onChange={handleImputChange}
            />
            

<input 
                type="text"
                placeholder={formData.phone.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.phone.name}
                id={formData.phone.name}
                value={userPhone}
                onChange={handleImputChange}
            />

<input 
                type="text"
                placeholder={formData.company.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.company.name}
                id={formData.company.name}
                value={userCompany}
                onChange={handleImputChange}
            />



<input 
                type="text"
                placeholder={formData.country.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.country.name}
                id={formData.country.name}
                value={userCountry}
                onChange={handleImputChange}
            />


<input 
                type="text"
                placeholder={formData.state.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.state.name}
                id={formData.state.name}
                value={userState}
                onChange={handleImputChange}
            />

<input 
                type="text"
                placeholder={formData.city.placeholder}
                className='text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-[1px] border-white border-solid focus:outline-none'
                name={formData.city.name}
                id={formData.city.name}
                value={userCity}
                onChange={handleImputChange}
            />
            {/**File */}
            <div>

            <label 
            className='text-md md:text-lg lg:text-xl inline-block border-[1px] border-white rounded p-2 cursor-pointer text-white i'
            htmlFor="requirementsFile">{formData.file.placeholder}</label>
            <input className='hidden' 
                name={formData.file.name}
                id={formData.file.name} 
                type="file" 
                accept="application/pdf,application/vnd.ms-excel"
                
                />
            </div>

            {/**Message */}
            <textarea 
                placeholder={formData.message.placeholder}
                className='col-start-1 col-end-2 md:col-end-3 text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name={formData.message.name}
                value={userMessage}
                onChange={handleImputChange}
            />

            {/**Message */}
            <button className='text-center inline-block  w-full md:w-1/2 font-medium  text-base md:text-lg lg:text-xl  hover:text-white bg-black	hover:bg-primary linear duration-300 rounded text-white py-4 px-6 uppercase cursor-pointer	
                border-primary border-2 
            '>
                {formData.button.placeholder}
            </button>
        </form>
  )
}

export default Form