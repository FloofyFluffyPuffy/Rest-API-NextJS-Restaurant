import React from 'react'
import GetReservationForm from './GetReservationForm'
const Reservation = () => {
  return (
    <div className='reservation bg-[#0C0B09] min-h-screen p-8'>
      <div className="SectionSB flex flex-row items-center"  data-aos="fade-up">
        <h2  className="sectionHeading">
          RESERVATION
        </h2>
        <div className="h-px w-30 bg-[#37332e] ml-2"></div>
      </div>
            <h1
        className="text-3xl font-bold text-[#CDA45E]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Book A Table!
      </h1>
      <GetReservationForm/>
    </div>
  )
}

export default Reservation