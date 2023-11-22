'use client'

import Cv from '@/src/components/content/Cv'
import Study from '@/src/components/content/Study'
import DownloadButton from '@/src/components/inputs/DownloadButton'

export default function Page() {
  return (
    <>
      <div className='mx-auto w-full px-10 md:flex'>
        <div className='w-full md:w-1/2'>
          <p className='text-[38px] text-black md:text-[44px]'>
            Work experience
          </p>
          <Cv
            className={'py-4 md:w-9/12 md:py-10'}
            childrenDate={'sep 2022 - today'}
            childrenJob={'Morrow, Rotterdam'}
            childrenFunction={'Interaction Designer'}
            childrenDescription={`
                After completing my studies, I started at Morrow. I have experienced enormous growth in everything that screams interaction design and am actively committed to inclusiveness and diversity in the workplace. For more information check morrow.nl`}
          />
          <Cv
            className={'py-4 md:px-20 md:py-10'}
            childrenDate={'2021 - sep 2022'}
            childrenJob={'Profijt, Studdy, HOBP, At Monday, Breda'}
            childrenFunction={'Junior UX/UI Designer and Software checker'}
            childrenDescription={`Checking already created software on bugs or any other problems. And making a start in my career as a UX designer.`}
          />
          <Cv
            className={'py-4 md:w-9/12 md:py-10'}
            childrenDate={'2018'}
            childrenJob={'MCW Creative Agency, Rotterdam'}
            childrenFunction={'Design Intern'}
            childrenDescription={`
                As an intern I got to do a bit of everything. From UI and UX design to illustration and devising concepts. I have been able to develop myself enormously. For more information check mcw.nl`}
          />
          <Cv
            className={'py-4 md:px-20 md:py-10'}
            childrenDate={'2018 - 2021'}
            childrenJob={' Florein Gerbera’s, Naaldwijk'}
            childrenFunction={'Employee production & team lead'}
            childrenDescription={`
                Picking, sorting and packing flowers. After half a year I started leading the team.`}
          />
          <Cv
            className={'py-4 md:w-9/12 md:py-10'}
            childrenDate={'2015 - 2021'}
            childrenJob={'Band performance, public gatherings'}
            childrenFunction={'Guitarist'}
            childrenDescription={``}
          />
          <Cv
            className={'py-4 md:px-20 md:py-10'}
            childrenDate={'2018'}
            childrenJob={'Nature’s Pride, Maasdijk'}
            childrenFunction={'Employee production'}
            childrenDescription={``}
          />
          <Cv
            className={'py-4  md:w-9/12  md:py-10'}
            childrenDate={'2016'}
            childrenJob={' Kringloop, Naaldwijk'}
            childrenFunction={'All-round volunteer'}
            childrenDescription={``}
          />
        </div>
        <div className='w-full md:w-1/2'>
          <p className='text-[38px] text-black md:text-[44px]'>Education</p>
          <Study
            className={'py-4 md:py-10'}
            childrenDate={'2018 - 2022'}
            childrenName={'HBO - Communication & Multimedia Design'}
            childrenLocation={'Avans University of Applied Sciences, Breda'}
          />
          <Study
            className={'py-4 md:px-20 md:py-10'}
            childrenDate={'2021 - 2022'}
            childrenName={'Minor - User Experience & Interface Design'}
            childrenLocation={
              'Rotterdam University of Applied Sciences, Rotterdam'
            }
          />
          <Study
            className={'py-4 md:py-10'}
            childrenDate={'2018 - 2019'}
            childrenName={'Course Adobe Photoshop & illustrator'}
            childrenLocation={'Udemy, online'}
          />
          <Study
            className={'py-4 md:px-20 md:py-10'}
            childrenDate={'2015 - 2017'}
            childrenName={'Course solfeggio & musictheory'}
            childrenLocation={'Vinnies Gittar School, Naaldwijk'}
          />
          <Study
            className={'py-4 md:py-10'}
            childrenDate={'2012 - 2017'}
            childrenName={'HAVO - Economics & Society'}
            childrenLocation={'ISW Hoogeland, Naaldwijk'}
          />
        </div>
        <DownloadButton href={'/downloads/CvMayDeHaas.pdf'} />
      </div>
    </>
  )
}
