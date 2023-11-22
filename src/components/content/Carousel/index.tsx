import React, { Suspense, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// Initialize the Swiper modules
SwiperCore.use([Navigation])

interface CarouselImage {
  url: string
  linkAlt: string
  alt: string
  src: string
  title: string
  description: string
}

interface CarouselMoreProps {
  images: CarouselImage[]
}

const SuspensePlaceholder: React.FC = () => (
  <div className='!relative flex h-full max-w-[476px] flex-col items-center justify-center rounded-[26px] !border border-black lg:flex lg:h-[420px] lg:[&:nth-child(3n+2)]:mt-40'>
    {/* Updated import for ArrowPathIcon */}
    <ArrowLeftIcon className='z-10 mr-3 flex h-5 w-5 animate-spin  fill-black text-black' />
  </div>
)

const CarouselMore: React.FC<CarouselMoreProps> = ({ images }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
      })
    }
  }, [swiper])

  const handlePrevButtonClick = () => {
    if (swiper && !isBeginning) {
      swiper.slidePrev()
    }
  }

  const handleNextButtonClick = () => {
    if (swiper && !isEnd) {
      swiper.slideNext()
    }
  }

  const swiperParams = {
    spaceBetween: 20,
    navigation: false,
    breakpoints: {
      // When window width is <= 640px (mobile screens)
      320: {
        slidesPerView: 1,
      },
      608: {
        slidesPerView: 1.5,
      },
      708: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.5,
      },
      1220: {
        slidesPerView: 3.5,
      },
    },
  }

  return (
    <div className='relative px-10 ' data-cursor-content='trigger'>
      <h4 className='w-full pb-2xl text-[44px] text-black lg:w-4/12'>
        Feel free to check out my other projects
      </h4>
      <Swiper {...swiperParams} onSwiper={setSwiper}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Suspense fallback={<SuspensePlaceholder />}>
              <Link
                href={image.url}
                passHref // Added passHref for correct Link behavior
                className='relative flex flex-col justify-center gap-sm lg:mt-0'
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  className='!relative  max-w-[356px] rounded-[26px] !border border-black object-cover'
                />

                <p className='text-[28px] text-black'>{image.title}</p>
                <p className='w-[85%] text-black lg:w-[75%]'>
                  {image.description}
                </p>
              </Link>
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons with Heroicons */}
      <div className='relative mt-10 text-center lg:mt-20'>
        {!isBeginning && (
          <button
            className='swiper-button-prev group !h-12 !w-12 rounded-full border !border-black p-3 hover:border-primary hover:bg-black'
            onClick={handlePrevButtonClick}
          >
            <ArrowLeftIcon className='h-3 w-3 text-black group-hover:text-primary ' />
          </button>
        )}
        {!isEnd && (
          <button
            className='swiper-button-next group !h-12 !w-12 rounded-full border !border-black p-3 transition hover:border-primary hover:bg-black'
            onClick={handleNextButtonClick}
          >
            <ArrowRightIcon className='h-3 w-3 text-black transition group-hover:text-primary' />
          </button>
        )}
      </div>
    </div>
  )
}

export default CarouselMore
