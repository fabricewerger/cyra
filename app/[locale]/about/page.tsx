/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className='mx-auto w-full px-10 lg:flex'>
        <div className='flex w-full flex-col lg:w-7/12'>
          <h2 className='pb-10 text-5xl text-black'>This is me!</h2>
          <p className='text-[16px] text-black lg:text-[22px]'>
            It's wonderful to see you exploring my portfolio. Now that I have
            your attention, allow me to introduce myself properly. I'm May, a
            diligent 23-year-old interaction/UX designer with a deep passion for
            UX research and crafting awesome user experiences. I find immense
            joy in assisting people and engaging in meaningful work. While I
            appreciate structure, I'm not afraid to break free from it when the
            situation calls for it. I am a real team player and place a high
            value on forging strong connections with my colleagues. However, I
            also like to work more indepently when i really need to focus.
            <br />
            <br />
            Beyond my professional identity, I believe it's important to share a
            bit about my life outside of work. During my free time, I like to
            dive in to diverse hobbies. Making music, drawing, reading,
            knitting, and pottery are all activities that I really enjoy.
            Lately, I've also taken up the challenge of learning different
            languages, such as Japanese. Some might also call me somewhat of a
            travel agent. Planning the perfect vacation, not only for myself but
            also for others, brings me great satisfaction.
            <br />
            <br />
            I'm a hard-working, eager-to-learn, empathetic, and emotional
            individual, and I've come to embrace these qualities as defining
            aspects of myself. Now, I would like to get to know more about you!
          </p>
        </div>

        <div className='relative mx-auto mt-10 flex w-full justify-center md:px-10  lg:mt-0 lg:w-5/12 lg:justify-end xl:px-0'>
          <Image
            alt='photo of may'
            src={'/images/about/about.JPG'}
            fill
            className='!relative max-w-[476px] rounded-[26px] !border border-black object-cover'
          />
        </div>
      </div>
    </>
  )
}
