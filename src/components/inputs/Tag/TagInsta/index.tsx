import Link from 'next/link'
import classNames from 'classnames'

interface TagInstaProps {
  className: string
}

const TagInsta = ({ className }: TagInstaProps) => {
  return (
    <div className={classNames(className)}>
      <Link href={'https://www.instagram.com/iniminimay/'} target='_blank'>
        <div
          className={`relative inline-flex items-center justify-center rounded-full border border-black p-sm text-black transition-colors hover:bg-black hover:text-primary sm:px-lg lg:px-2xl`}
        >
          <span
            className={`inline-flex items-center justify-center gap-px text-xs sm:gap-xs sm:text-sm md:text-lg lg:text-2xl`}
          >
            {'Instagram'}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default TagInsta
