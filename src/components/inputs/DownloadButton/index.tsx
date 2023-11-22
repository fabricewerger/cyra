import Link from 'next/link'

interface DownloadButtonProps {
  href: string
}

const DownloadButton = ({ href }: DownloadButtonProps) => {
  return (
    <div className='fixed left-1/2 top-[85%] z-[2000] -translate-x-1/2 -translate-y-1/2 lg:inset-[unset] lg:right-10 lg:top-[85%] lg:-translate-x-1/2 '>
      <div className='inline-flex min-w-[200px] items-center justify-center rounded-full border border-black bg-primary p-sm px-md text-[18px] text-black transition-colors hover:bg-black hover:text-primary sm:min-w-[250px] sm:px-sm md:px-md md:text-[24px] lg:right-10 lg:px-2xl lg:text-[34px]'>
        <Link href={href} target='_blank' download>
          <div className='flex items-center gap-sm'>
            {'Download PDF'}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DownloadButton
