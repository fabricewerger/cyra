import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const BackButton = () => {
  return (
    <Link
      className='group relative inline-flex items-center bg-primary pb-xl text-3xl text-light transition-colors hover:text-black lg:right-10 lg:px-10'
      href='/projects'
    >
      <div className='flex items-center gap-sm'>
        <ArrowLeftIcon className='h-6 w-6 text-light transition-colors group-hover:text-black' />
        {'All projects'}
      </div>
    </Link>
  )
}

export default BackButton
