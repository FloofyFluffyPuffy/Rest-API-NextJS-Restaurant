"use client"
import { useEffect } from 'react';
import { useContextData } from '@/Code/typescript/contexts/Provider';
const SectionHashScrollHandler = () => {
  const {sectionHash,setSectionHash} = useContextData()
  console.log("server running successfully");
  useEffect(()=> {
    if (sectionHash){
      const targetElement = document.querySelector(sectionHash)
      if(targetElement){
        targetElement.scrollIntoView({ behavior: "smooth" })
        setSectionHash("")
      }
    }
  }, [])
  return null

  // Basicaloly have to run these code here cuz if i run it in home page it must be client side cuz 
  // UseEffect is client side only and it will literally explode the client pc cuz so many stuff need to load
}

export default SectionHashScrollHandler