'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Program', href: '#program' },
    { label: 'About Us', href: '#about' },
    { label: 'Review', href: '#review' },
    { label: 'Guru', href: '#guru' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <nav className="bg-[#F3F8FF] shadow-md py-4 sticky top-0 z-50 transition duration-300 ease-in-out">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#4A6FA5] tracking-wide">
          BAKU
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#2D4C6D] font-medium text-base">
          {navItems.map((item) => (
            <li key={item.href} className="hover:text-[#7096D1] transition duration-300 cursor-pointer">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#4A6FA5]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-[#F3F8FF] text-[#2D4C6D] font-medium text-base transition-all">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="block hover:text-[#7096D1]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
