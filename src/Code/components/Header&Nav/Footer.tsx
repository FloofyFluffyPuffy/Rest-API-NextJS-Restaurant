"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useContextData } from "@/Code/typescript/contexts/Provider";
import { navs } from "./Nav"; // Imports your dynamic nav array directly from your Nav file
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
  const pageName = usePathname();
  const { setSectionHash } = useContextData();

  return (
    <footer className="bg-[#0f0e0c] text-gray-400 border-t border-[#26231e] pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-6">
          {/* Bigger, Wider Logo Container */}
            <img 
              src="/assets/logo.svg" 
              alt="Downtown Bistro Logo" 
              className="h-20 sm:h-32 md:h-48 lg:h-64 -mt-8 sm:-mt-12 md:-mt-20 -mb-6 sm:-mb-10 w-auto max-w-full object-contain shrink-0" 
            />
          <p className="text-sm text-gray-400 leading-relaxed text-center">
            Experience a culinary journey crafted with the finest ingredients and an unparalleled passion for flavor.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
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
          <h4 className="text-white font-semibold text-base tracking-wider uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {navs.map((nav) => {
              // Handle links that contain a dropdown submenu
              if (nav.dropdown) {
                return nav.dropdown.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={pageName === item.page ? item.path : item.page}
                      className="hover:text-[#CDA45E] flex items-center gap-1 group transition-colors"
                      onClick={(e) => {
                        // ONLY smooth scroll and prevent default if we are ALREADY on that target page
                        if (pageName === item.page) {
                          e.preventDefault();
                          const targetElement = document.querySelector(item.path);
                          if (targetElement) {
                            targetElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                        // If we are NOT on the correct page, do NOT call e.preventDefault(). 
                        // Let Next.js natively navigate to the href link!
                        else {
                          setSectionHash(item.path);
                        }
                      }}
                    >
                      <FaChevronRight size={10} className="text-[#CDA45E]/50 group-hover:translate-x-1 transition-transform" />
                      {item.name}
                    </Link>
                  </li>
                ));
              }

              // Handle top-level static links (Home, Menu, About, etc.)
              const targetPage = `/${nav.name === "Home" ? "" : nav.name.toLocaleLowerCase()}`;
              return (
                <li key={nav.id}>
                  <Link
                    href={targetPage}
                    className="hover:text-[#CDA45E] flex items-center gap-1 group transition-colors"
                    onClick={(e) => {
                      // Smooth scroll to element if matching section anchor is on current page
                      if (pageName === targetPage) {
                        e.preventDefault();
                        const targetElement = document.getElementById(nav.target);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        setSectionHash(`#${nav.target}`);
                      }
                    }}
                  >
                    <FaChevronRight size={10} className="text-[#CDA45E]/50 group-hover:translate-x-1 transition-transform" />
                    {nav.name}
                  </Link>
                </li>
              );
            })}
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
            src="https://maps.google.com/maps?q=3828%20Piermont%20Dr%20NE,%20Albuquerque,%20NM%2087111&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full rounded-lg border-0"
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