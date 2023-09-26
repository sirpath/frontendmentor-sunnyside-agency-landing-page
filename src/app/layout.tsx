import '@/styles/globals.css'
import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import { fontBarlow } from '@/styles/font'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Sunnyside agency landing page',
  description: 'CHALLENGE Sunnyside agency landing page',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={`${fontBarlow.className} flex flex-col items-center`}>
      {children}
    </body>
  </html>
)

export default RootLayout
