import React from 'react'
import { specialityData } from './assets_frontend/assets'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
    <div className="flex flex-col items-center space-y-6 mt-10">
        <div className="px-14 text-center">
            <h1 className="text-gray-500 text-[20pt] font-medium">Find by Specialty</h1>
            <p className="text-gray-700">Simply browse through our extensive list of trusted doctors and easily schedule your appointment.</p>
        </div>

        <div className="flex items-center space-x-6 overflow-scroll">
            {specialityData.map((speciality, i) => (
                <>
                    <Link to={'/'} className="flex flex-col items-center">
                        <img src={speciality.image} className="w-32" />
                        <p>{speciality.speciality}</p>
                    </Link>
                </>
            ))}
        </div>
    </div>
    </>
  )
}

export default Categories