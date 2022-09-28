import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../../../hooks/useForm';
import { FormData } from "../../../types/Contact";

interface FormProps {
    formData: FormData;
}

const Form = ({formData}:FormProps) => {
    const [sending, setSending] = useState(false)
    const [ fileValue, setFileValue] = useState<any>();
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

    // const handleFile = (e: any):void =>{
    //     const file = Array.from(e.target.files);
    //     console.log("file", file[0])
    //     setFileValue(file[0])

    // }
const handleSubmit = async(e: any) => {
    e.preventDefault();
    setSending(true)
    //const fd = new FormData();
    //fd.append("file", fileValue);
    await fetch( "/api/contact", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    setSending(false)
}
  return (
    <form id="form" onSubmit={handleSubmit} className='z-10	grid gap-y-12 gap-x-8 grid-cols-1 md:grid-cols-2 px-4 md:mx-12 lg:mx-20'>
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
            {/* <div>

            <label 
            className='text-md md:text-lg lg:text-xl inline-block border-[1px] border-white rounded p-2 cursor-pointer text-white i'
            htmlFor={formData.file.name}>{formData.file.placeholder}</label>
            <input className='hidden' 
                name={formData.file.name}
                id={formData.file.name} 
                type="file" 
                accept="application/pdf"
                onChange={handleFile}
            />
            </div> */}

            {/**Message */}
            <textarea 
                placeholder={formData.message.placeholder}
                className='col-start-1 col-end-2 md:col-end-3 text-white placeholder-white text-lg md:text-xl lg:text-2xl font-medium bg-black border-b-2 border-white border-solid focus:outline-none'
                name={formData.message.name}
                value={userMessage}
                onChange={handleImputChange}
            />

            {/**Message */}
            <button disabled={sending} className='text-center inline-block  w-full md:w-1/2 font-medium  text-base md:text-lg lg:text-xl  hover:text-white bg-black	hover:bg-primary linear duration-300 rounded text-white py-4 px-6 uppercase cursor-pointer	
                border-primary border-2 
            '>
                {
                    !sending ? formData.button.placeholder
                    :<svg className="inline mr-2 w-8 h-8 text-white animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                }
                
            </button>
        </form>
  )
}

export default Form