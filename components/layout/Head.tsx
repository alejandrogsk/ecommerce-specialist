import Head from 'next/head'
import React, { ReactElement } from 'react'

interface CustomHeadProps {
    title: string;
    description: string;
}

const CustomHead = ({title, description}:CustomHeadProps):ReactElement => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Head>
  )
}

export default CustomHead