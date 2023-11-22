import Link from 'next/link'

const TagEmail = () => {
  return (
    <Link className='flex lg:justify-end' href={'mailto:maycyra@gmail.com'} target='_blank'>
      <div
        className={`relative inline-flex items-center justify-center rounded-full border border-black p-md text-black transition-colors hover:bg-black hover:text-primary md:px-lg`}
      >
        <span
          className={`inline-flex items-center justify-center gap-xs text-lg sm:text-xl lg:text-[44px] lg:leading-none`}
        >
          {'maycyrahaas@gmail.com'}
        </span>
      </div>
    </Link>
  )
}

export default TagEmail
