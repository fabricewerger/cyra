'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const genericHamburgerLine = `h-[2px] w-6 my-1 rounded-full bg-black transition ease transform duration-300`

  return (
    <>
      <nav
        className={`group pointer-events-auto w-full cursor-pointer justify-between text-xl font-medium text-black transition duration-150 lg:flex ${
          isOpen
            ? 'absolute right-10 top-10  flex max-w-[240px] flex-col gap-2 rounded border border-black bg-primary p-4 py-6 lg:hidden'
            : 'hidden'
        } lg:block `}
      >
        <Link
          href='/projects'
          className='pointer-events-auto cursor-pointer font-medium text-black transition duration-150 hover:!text-black group-hover:text-black/50'
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          href='/about'
          className='pointer-events-auto cursor-pointer font-medium text-black transition duration-150 hover:!text-black group-hover:text-black/50'
          onClick={closeMenu}
        >
          About me
        </Link>
        <Link
          href='/cv'
          className='pointer-events-auto cursor-pointer font-medium text-black transition duration-150 hover:!text-black group-hover:text-black/50'
          onClick={closeMenu}
        >
          CV
        </Link>
        <Link
          href='/contact'
          className='pointer-events-auto cursor-pointer font-medium text-black transition duration-150 hover:!text-black group-hover:text-black/50'
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
      <button
        onClick={toggleMenu}
        className={` z-20 flex flex-col rounded  ${
          isOpen ? ' ' : 'border border-black'
        }  p-4 focus:outline-none lg:hidden`}
        aria-label='Toggle mobile menu'
      >
        {isOpen ? (
          <div>
            <div className={`${genericHamburgerLine} translate-y-3 -rotate-45`} />
            <div className={`${genericHamburgerLine} opacity-0`} />
            <div className={`${genericHamburgerLine} rotate-45`} />
          </div>
        ) : (
          <div className='flex flex-col'>
            <div className={`${genericHamburgerLine}`} />
            <div className={`${genericHamburgerLine}`} />
            <div className={`${genericHamburgerLine}`} />
          </div>
        )}
      </button>
    </>
  )
}

export default Navbar
