import Link from 'next/link'

const TagNumber = () => {
  return (
    <Link className='flex lg:justify-end' href={'tel:+31683535060'} target='_blank'>
      <div
        className={`relative inline-flex items-center justify-center rounded-full border border-black p-md text-black transition-colors hover:bg-black hover:text-primary md:px-lg`}
      >
        <span
          className={`inline-flex items-center justify-center gap-xs  text-lg sm:text-xl lg:text-[44px] lg:leading-none`}
        >
          {'+31683535060'}
        </span>
      </div>
    </Link>
  )
}

export default TagNumber
