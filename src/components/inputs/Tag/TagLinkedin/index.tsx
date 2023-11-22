import Link from 'next/link'
import classNames from 'classnames'

interface TagLinkedinProps {
  className: string
}

const TagLinkedin = ({ className }: TagLinkedinProps) => {
  return (
    <div className={classNames(className)}>
      <Link
        href={'https://www.linkedin.com/in/may-de-haas-567b231a0/'}
        target='_blank'
      >
        <div
          className={`relative inline-flex items-center justify-center rounded-full border border-black p-sm text-black transition-colors hover:bg-black hover:text-primary sm:px-lg lg:px-2xl`}
        >
          <span
            className={`inline-flex items-center justify-center gap-px text-xs sm:gap-xs sm:text-sm md:text-base lg:text-2xl`}
          >
            {'LinkedIn'}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default TagLinkedin
