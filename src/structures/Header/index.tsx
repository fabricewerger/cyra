import Link from 'next/link'
import Navbar from '../navbar'

const Header2 = () => {
  return (
    <>
      <header className='fixed top-0 z-[20000000000000] w-full cursor-none bg-primary px-10 pb-[25px] pt-10'>
        <div className='flex justify-between bg-primary lg:items-center'>
          <Link
            className='flex h-[62px] w-full items-center pl-1 text-3xl text-black md:text-[38px] lg:h-full lg:text-[62px]'
            href='/'
          >
            May de Haas
          </Link>
          <Navbar />
        </div>
      </header>
      <div className='m-14 h-10' />
    </>
  )
}

export default Header2
