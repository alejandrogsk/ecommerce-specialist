import { useRouter } from 'next/router'
import React, { ReactComponentElement } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

const Layout = ({children}:any) => {
  const{locale}=useRouter();
  return (
    <>
        <Navigation language={locale}/>
            {children}
        <Footer />
    </>
  )
}

export default Layout