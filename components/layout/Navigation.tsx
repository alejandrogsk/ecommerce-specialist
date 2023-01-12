import Link from 'next/link';
import React, { ReactComponentElement, useEffect } from 'react'


const menuItemsEn = [
  {
    id: "#companies",
    title: "Companies",
  },
  {
    id: "#services",
    title: "Services",
  },
  {
    id: "#contact",
    title: "Contact Me",
  }

]

const menuItemsEs = [
  {
    id: "#companies",
    title: "Empresas",
  },
  {
    id: "#services",
    title: "Servicios",
  },
  {
    id: "#contact",
    title: "Contactame",
  }

]

const Navigation = ({language}:any) => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ menu, setMenu ] = React.useState(menuItemsEn);

  React.useEffect(() => {
    (language === "es")
    ?setMenu(menuItemsEs)
    :setMenu(menuItemsEn)
  }, [language])

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='z-10	 w-full bg-white'>
        <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
  <div className="bg-white flex flex-wrap justify-between items-center px-0 md:px-8 lg:px-12">
    <Link href="/" >
    <a className="block flex items-center z-10 text-base md:text-2xl uppercase font-medium">
       Alejandro Suarez
    </a>
    </Link>
    <button onClick={handleMenu} data-collapse-toggle="navbar-default" type="button" 
    className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg ml-auto md:hidden  focus:outline-none focus:ring-0 " aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
      <p className='text-base uppercase font-medium'>Menu</p>
      <div className={`transition-all	duration-300	 ml-2 h-4 w-6 flex flex-col justify-around ${isOpen&&'mobile-icon-open'}`}>
        <span className='transition-all	duration-300 block w-6 h-0.5 bg-black'></span>
        <span className='transition-all	duration-300 block w-6 h-0.5 bg-black'></span>
      </div>
    </button>
    
    <div className={`${isOpen ? 'bloack' : 'hidden'} w-full md:block md:w-auto bg-white`} id="navbar-default">
      <ul className="flex flex-col p-4 mt-4  bg-white rounded-lg border border-gray-100 md:hover:text-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
        {
          menu.map((item, index) =>(
            <li key={index}>
            <a onClick={()=>setIsOpen(false)} href={item.id} className="text-xl block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ">{item.title}</a>
          </li>
          ))
        }
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navigation