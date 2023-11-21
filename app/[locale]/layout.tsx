'use client'

import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import './../globals.css'
import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const inter = Inter({ subsets: ['latin'] })

const locales = ['en', 'nl']

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: any
}) {
  if (!locales.includes(locale as string)) notFound()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
