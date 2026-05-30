import { Dot } from 'lucide-react';
import React from 'react'

const Footer = () => {
    const year= new Date().getFullYear();
  return (
    <div className=' bgYellow p-10 text-center'>
        <h1 className=' font-bold flex items-center justify-center'> © {year} <Dot /> All rights reserved </h1>
        <hr className=' my-2 mx-10' />
        <div className=' flex flex-wrap items-center justify-center gap-2 '>
            <h1 className=' font-bold text-xl'> Girls Fashion Hub </h1>
            <Dot size={30} />
            <h1 className=' font-bold text-xl'> PP ROAD, Buxar, Bihar </h1>
        </div>
    </div>
  )
}

export default Footer