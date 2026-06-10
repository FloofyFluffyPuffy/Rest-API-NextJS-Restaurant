"use client"
import React from 'react'
import Link from 'next/link'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaChevronRight 
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#0f0e0c] text-gray-400 border-t border-[#26231e] pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-4">
          <span className="text-[#CDA45E] font-bold text-2xl tracking-widest uppercase font-serif">
            Downtown Bistro
          </span>
          <p className="text-sm text-gray-400 leading-relaxed">
            Experience a culinary journey crafted with the finest ingredients and an unparalleled passion for flavor.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-[#1c1a15] border border-[#37332e] flex items-center justify-center text-gray-400 hover:text-[#CDA45E] hover:border-[#CDA45E] transition-all duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#1c1a15] border border-[#37332e] flex items-center justify-center text-gray-400 hover:text-[#CDA45E] hover:border-[#CDA45E] transition-all duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#1c1a15] border border-[#37332e] flex items-center justify-center text-gray-400 hover:text-[#CDA45E] hover:border-[#CDA45E] transition-all duration-300">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base tracking-wider uppercase">Our Menu</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/menu" className="hover:text-[#CDA45E] flex items-center gap-1 group transition-colors">
                <FaChevronRight size={10} className="text-[#CDA45E]/50 group-hover:translate-x-1 transition-transform" />
                Main Course
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-[#CDA45E] flex items-center gap-1 group transition-colors">
                <FaChevronRight size={10} className="text-[#CDA45E]/50 group-hover:translate-x-1 transition-transform" />
                Desserts & Drinks
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="hover:text-[#CDA45E] flex items-center gap-1 group transition-colors">
                <FaChevronRight size={10} className="text-[#CDA45E]/50 group-hover:translate-x-1 transition-transform" />
                Book A Table
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#CDA45E] flex items-center gap-1 group transition-colors">
                <FaChevronRight size={10} className="text-[#CDA45E]/50 group-hover:translate-x-1 transition-transform" />
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base tracking-wider uppercase">Contact Us</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#CDA45E] mt-1 shrink-0" size={16} />
              <span>3828 Piermont Dr NE, Albuquerque, NM 87111</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#CDA45E] shrink-0" size={14} />
              <span className="text-white font-medium">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#CDA45E] shrink-0" size={14} />
              <a href="mailto:info@downtownbistro.com" className="hover:text-[#CDA45E] transition-colors">info@downtownbistro.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-base tracking-wider uppercase">Opening Hours</h4>
          <div className="flex gap-3 items-start text-sm bg-[#161410] p-4 rounded-lg border border-[#26231e]">
            <FaClock className="text-[#CDA45E] mt-1 shrink-0" size={16} />
            <div className="flex flex-col gap-1">
              <span className="text-white font-medium">Monday - Sunday</span>
              <span className="text-xs text-gray-400">07:00 AM - 11:00 PM</span>
              <span className="text-[11px] text-[#CDA45E] mt-1">Happy Hour: 4PM - 6PM</span>
            </div>
          </div>
        </div>

      </div>

{/* Map Segment */}
<div className="max-w-6xl mx-auto px-6 mt-10">
  <div className="w-full h-64 rounded-xl overflow-hidden border border-[#26231e] bg-[#161410] p-1">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.2222446989836!2d-106.53914862511826!3d35.12612706026909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87227557938908eb%3A0x723dd3cf63dbb051!2s3828%20Piermont%20Dr%20NE%2C%20Albuquerque%2C%20NM%2087111%2C%20USA!5e0!3m2!1sen!2s!4v1780742549204!5m2!1sen!2s" 
      className="w-full h-full rounded-lg"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#26231e] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Downtown Bistro. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#CDA45E] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#CDA45E] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer