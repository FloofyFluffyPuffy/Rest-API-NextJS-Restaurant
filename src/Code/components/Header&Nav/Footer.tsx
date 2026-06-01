"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#1c1a15] text-white border-t border-[#37332e] py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <span className="text-[#CDA45E] font-bold text-2xl tracking-widest uppercase">
            Downtown Bistro
          </span>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Experience a culinary journey crafted with the finest ingredients and an unparalleled passion for flavor.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-lg tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#CDA45E] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-[#CDA45E] transition-colors duration-200">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#CDA45E] transition-colors duration-200">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#CDA45E] transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Hours Section */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-lg tracking-wider">Hours & Contact</h4>
          <div className="text-sm text-gray-400 flex flex-col gap-1">
            <p>Mon - Sun: 7:00 AM - 11:00 PM</p>
            <p className="mt-2">123 Culinary Street, Food City</p>
            <p className="text-[#CDA45E] mt-1">+1 (555) 123-4567</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-[#37332e]/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#CDA45E] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#CDA45E] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer