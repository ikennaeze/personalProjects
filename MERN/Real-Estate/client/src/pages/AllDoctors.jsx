import React, { useState } from 'react'
import { doctors } from '../components/assets_frontend/assets'

const AllDoctors = () => {
    const [currentDoctorsOpen, setCurrentDoctorsOpen] = useState("All")

    const buttonNames = ["All", "General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"]

  return (
    <>
    <div className="mx-32 text-gray-700">
        <h1>Browse through our Realtors</h1>
        <div className="flex my-4 space-x-6">
            <div className="flex flex-col space-y-3.5">
                {buttonNames.map((buttonName, i) => (
                    <button className="border border-gray-400 px-10 py-2 rounded-md text-[10.5pt]" onClick={() => setCurrentDoctorsOpen(buttonName)}>{buttonName}</button>
                ))}
            </div>

            <div>
                <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-4 px-3 sm:px-0 pb-20"> 
                {(currentDoctorsOpen == "All" ? doctors : doctors.filter(doctor => doctor.speciality == currentDoctorsOpen)).map((doctor, i) => (
                    <div className=" border-[#c9d8ff] border rounded-xl">
                        <img src={doctor.image} className="bg-[#eaefff]" />

                        <div className='flex'>
                            <div className="pl-4 pb-2 pt-4">
                                <div className="flex items-center justify-center gap-2 text-sm text-green-500">
                                    <p className="w-3 h-3 rounded-full bg-green-500"></p>
                                    <p>Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="pl-4 pb-4">
                            <p className="text-[14pt] font-medium">{doctor.name}</p>
                            <p className="text-[10pt]">{doctor.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AllDoctors