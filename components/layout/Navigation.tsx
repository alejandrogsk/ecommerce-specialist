import React, { useEffect } from 'react'

const Navigation = () => {
  const [ isOpen, setIsOpen ] = React.useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='z-10	 w-full bg-white'>
        <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="flex flex-wrap justify-between items-center px-4 md:px-8 lg:px-12">
    <a href="https://flowbite.com/" className="flex items-center z-10 text-lg md:text-2xl uppercase font-medium">
       Alejandro Suarez
    </a>
    <button onClick={handleMenu} data-collapse-toggle="navbar-default" type="button" 
    className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden  focus:outline-none focus:ring-0 " aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
      <p className=' text-lg uppercase font-medium'>Menu</p>
      <div className='ml-4 h-4 w-6 flex flex-col justify-around'>
        <span className='block w-6 h-0.5 bg-black'></span>
        <span className='block w-6 h-0.5 bg-black'></span>
      </div>
    </button>
    
    <div className={`${isOpen ? 'visible' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="flex flex-col p-4 mt-4  bg-gray-50 rounded-lg border border-gray-100 md:hover:text-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="text-xl block py-2 pr-4 pl-3 text-black md:hover:text-primary  rounded md:bg-transparent md:p-0 dark:text-white" >Home</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navigation