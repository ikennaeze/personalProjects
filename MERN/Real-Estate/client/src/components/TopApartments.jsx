import React from 'react'
import { doctors } from './assets_frontend/assets'

const TopApartments = () => {
  return (
    <>
    <div className="pl-36 pr-20 my-16 text-gray-500 text-center space-y-3">
        <h1 className="text-[20pt] font-semibold">Top Apartments to Book</h1>
        <p className="text-[11pt] text-gray-700">Simply browse through our extensive list of apartments</p>

        <div className="w-full grid grid-cols-auto gap-y-6 gap-4 pt-5 px-3 sm:px-0"> 
            {doctors.map((doctor, i) => (
                <div className="mt-8 border-[#c9d8ff] border rounded-xl">
                    <img src={doctor.image} className="bg-[#eaefff]" />

                    <div>
                        <div className="p-4">
                            <div className="flex items-center justify-center gap-2 text-sm text-center text-green-500">
                                <p className="w-3 h-3 rounded-full bg-green-500"></p>
                                <p>Available</p>
                            </div>
                        </div>
                    </div>

                    <p>{doctor.name}</p>
                    <p>{doctor.speciality}</p>
                </div>
            ))}
        </div>
        <button className="border border-[#e9e4e4] bg-[#e9e4e4] p-4 text-[14pt] rounded-full px-8">more</button>
    </div>
    </>
  )
}

export default TopApartments