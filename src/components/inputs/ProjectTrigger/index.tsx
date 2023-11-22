import Image from 'next/image'
import Link from 'next/link'

interface ProjectTriggerProps {
  url: string
  src: string
  title: string
  description: string
  tag: string
}

const ProjectTrigger = ({
  url,
  src,
  title,
  description,
  tag,
}: ProjectTriggerProps) => {
  return (
    <>
      <div
        className={`mx-auto flex w-full max-w-[476px] flex-col flex-wrap items-center lg:[&:nth-child(3n+2)]:mt-40`}
      >
        <Link
          href={url}
          className='custom-cursor-trigger flex w-full flex-col items-start justify-center p-12 pt-0 text-center md:text-left lg:pt-12'
          data-cursor-content='trigger'
        >
          <div className='relative mx-auto mt-10 flex justify-center lg:mt-0'>
            <Image
              alt='Image about project.'
              src={src}
              fill
              className='!relative max-w-[476px] rounded-[26px] !border border-black object-cover lg:h-[420px]'
            />
          </div>
          <h1 className='my-4 text-left text-[22px] leading-tight lg:text-[28px]'>
            {title}
          </h1>
          <p className='mb-8 text-left text-[16px] lg:text-[22px]'>
            {description}
          </p>

          {/* Add the tag as a data attribute */}
          <div data-tag={tag} style={{ display: 'none' }} />
        </Link>
      </div>
    </>
  )
}

export default ProjectTrigger
