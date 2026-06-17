"use client"
import React, { useState } from 'react'

const GetReservationForm = () => {
    const [responseMsg, setResponseMsg] = useState<string>()
    const formId = "80"
    const url = `https://lightslategray-turkey-198424.hostingersite.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        formData.append('_wpcf7', formId)
        formData.append('_wpcf7_unit_tag', `wpcf7-f${formId}-o1`)
        /*these wpcf7 are like tracking bar code we ship to wordpress
        else we get "There no valid tag error"        */

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            })
            const data = await response.json()
            console.log("Response data:", data);
            if (data.status === 'mail_sent') {
                console.log('Reservation sent successfully!')
                setResponseMsg(`${data.message}`)
                e.currentTarget.reset()
            } else {
                if (data.invalid_fields && data.invalid_fields.length > 0) {
                    console.log(`${data.invalid_fields[0].field}: ${data.invalid_fields[0].message}`)
                    setResponseMsg(`${data.message}`)
                } else {
                    console.log(data.message || 'Something went wrong.')
                    setResponseMsg(`${data.message}`)
                }
            }
        } catch (error) {
            console.log('catch req.')
        }
    }

    const inputClasses = "w-full bg-transparent border border-[#CDA45E]/80 hover:border-[#CDA45E] p-4 text-white transition-colors focus:border-[#CDA45E] focus:outline-none cursor-pointer"
    const webKitClasses = "[&::-webkit-calendar-picker-indicator]:invert"

    return (
        <div className="bg-[#0a0a0a] p-10">
            <form
                onSubmit={handleSubmit}
                className="max-w-6xl mx-auto space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="inputCon grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="your-name" className="text-sm text-[#858485]">Name</label>
                        <input type="text" id="your-name" name="your-name" placeholder="Your Name" required className={inputClasses} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="your-email" className="text-sm text-[#858485]">Email</label>
                        <input type="email" id="your-email" name="your-email" placeholder="Your Email" required className={inputClasses} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="your-phone" className="text-sm text-[#858485]">Phone Number</label>
                        <input type="tel" id="your-phone" name="your-phone" placeholder="Your Phone" className={inputClasses} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="res-date" className="text-sm text-[#858485]">Reservation Date</label>
                        <input
                            type="date"
                            id="res-date"
                            name="res-date"
                            placeholder="Reservation Date"
                            className={`${inputClasses} ${webKitClasses}`}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="res-time" className="text-sm text-[#858485]">Reservation Time</label>
                        <input
                            type="time"
                            id="res-time"
                            name="res-time"
                            placeholder="Reservation Time"
                            className={`${inputClasses} ${webKitClasses}`}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="res-people" className="text-sm text-[#858485]">Party Size</label>
                        <input type="number" id="res-people" name="res-people" placeholder="# of people" className={inputClasses} />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="your-message" className="text-sm text-[#858485]">Additional Notes</label>
                    <textarea
                        id="your-message"
                        name="your-message"
                        placeholder="Example: Outside seating preferred, high chair needed for a toddler."
                        rows={6}
                        className={`${inputClasses} resize-none`}
                    />
                </div>

                <div className="formSubmit flex justify-center">
                    <button
                        type="submit"
                        className="cursor-pointer flex text-[18px] text-white hover:text-black rounded-full border-2 border-[#CDA45E]/70 py-2 px-6 transition-all duration-500 hover:bg-[#CDA45E] hover:scale-105"
                    >
                        Send Reservation
                    </button>
                </div>

                {responseMsg && <p className="text-center text-[#CDA45E] mt-4">{responseMsg}</p>}
            </form>
        </div>
    )
}

export default GetReservationForm