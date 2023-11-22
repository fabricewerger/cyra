import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames'

interface CvProps {
  childrenDate: string
  childrenJob: string
  childrenFunction: string
  childrenDescription: string
  className: string
}

const Cv = ({
  childrenDate,
  childrenJob,
  childrenFunction,
  childrenDescription,
  className,
}: CvProps) => {
  return (
    <div className={classNames('w-full', className)}>
      <p className='text-[18px] font-light text-black lg:text-[28px]'>
        {childrenDate}
      </p>
      <p className='text-[18px] font-medium text-black lg:text-[28px]'>
        {childrenJob}
      </p>
      <p className='text-[18px] font-medium text-black lg:text-[28px]'>
        {childrenFunction}
      </p>
      <p className='text-[18px] text-black lg:text-[28px]'>
        {childrenDescription}
      </p>
    </div>
  )
}

export default Cv
