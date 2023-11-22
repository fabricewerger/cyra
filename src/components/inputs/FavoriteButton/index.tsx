import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const FavoriteButton = () => {
  return (
    <Link
      className=' relative right-0 my-[40px] flex  min-w-[200px] px-10 sm:min-w-[200px] lg:absolute lg:top-3/4'
      href='/projects/thermogen'
    >
      <div className='group mx-auto inline-flex items-center rounded-full border border-black bg-primary p-sm text-[18px] text-black transition-colors hover:bg-black hover:text-primary md:px-md lg:right-10 lg:ml-auto lg:mr-0 lg:px-lg lg:text-[34px]'>
        <div className='flex items-center gap-sm'>
          {'See my favorite work'}
          <ArrowRightIcon className='h-10 w-10 text-black transition-colors group-hover:text-primary' />
        </div>
      </div>
    </Link>
  )
}

export default FavoriteButton
