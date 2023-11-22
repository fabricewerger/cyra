'use client'

import TagEmail from '@/src/components/inputs/Tag/TagEmail'
import TagInsta from '@/src/components/inputs/Tag/TagInsta'
import TagLinkedin from '@/src/components/inputs/Tag/TagLinkedin'
import TagNumber from '@/src/components/inputs/Tag/TagNumber'

export default function Page() {
  return (
    <>
      <div className='mx-auto w-full px-10 md:flex'>
        <div className='block w-full px-md lg:h-[550px] lg:w-1/2' />
        <div className='flex h-full w-full flex-col gap-lg px-md  lg:w-1/2'>
          <div className='flex flex-col justify-end gap-sm lg:absolute lg:bottom-[200px] lg:right-10 lg:h-[550px]'>
            <div className='order-2 flex w-[110%] justify-start gap-sm pt-6 md:w-full lg:order-1 lg:justify-end lg:gap-lg lg:pt-0'>
              <TagLinkedin className='order-2 lg:order-1' />
              <TagInsta className='order-1 lg:order-2' />
            </div>

            <div className='order-1 flex flex-col justify-start gap-lg pt-md lg:order-2 lg:flex-col-reverse lg:justify-end'>
              <TagEmail />
              <TagNumber />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
