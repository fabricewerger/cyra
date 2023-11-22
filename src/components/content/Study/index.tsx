import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames'

interface StudyProps {
  childrenDate: string
  childrenName: string
  childrenLocation: string
  className: string
}

const Study = ({
  childrenDate,
  childrenName,
  childrenLocation,
  className,
}: StudyProps) => {
  return (
    <div className={classNames('w-full ', className)}>
      <p className='text-[18px] font-light text-black lg:text-[28px]'>
        {childrenDate}
      </p>
      <p className='text-[18px] font-medium text-black lg:text-[28px]'>
        {childrenName}
      </p>
      <p className='text-[18px] text-black lg:text-[28px]'>
        {childrenLocation}
      </p>
    </div>
  )
}

export default Study
