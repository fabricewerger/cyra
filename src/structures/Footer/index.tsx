'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-10 pt-20 pb-10 flex flex-col gap-md lg:flex-row justify-between absolute bottom-0 w-full'>
      <Link
        className='text-black text-xl lg:text-2xl xl:text-3xl lg:order-2'
        href='mailto:maycyrahaas@gmail.com?subject=Hello May">Email Us</'
      >
        maycyrahaas@gmail.com
      </Link>
      <Link className='text-black text-xl lg:text-2xl xl:text-3xllg:order-3' href='tel:+31683535060'>
        +31683535060
      </Link>
      <div className='text-black text-xl lg:text-2xl xl:text-3xllg:order-1'>© May de Haas | All rights reserverd</div>
    </footer>
  )
}

export default Footer
