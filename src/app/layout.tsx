import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
// src/app/layout.js
import 'swiper/css';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website BAKU - Tempat Les',
  description: 'Belajar makin mudah dan menyenangkan bersama BAKU',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
