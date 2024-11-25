import React from 'react'
import group_profiles from '../components/assets_frontend/group_profiles.png'
import Categories from './Categories'
import TopApartments from './TopApartments'
const Main = () => {
  return (
    <>
    <div className="flex justify-center items-center mx-32 py-16 px-10 bg-[#5f6fff]">
        <div className="text-white">
            <h1 className="text-[32pt] font-semibold">Book Appointment with Trusted Realtors</h1>
            <div className="flex items-center space-x-4">
                <img src={group_profiles} className="h-14" />
                <p className="py-6 text-[10pt]">Simply browse through an extensive list of realtors and easily schedule your appointment.</p>
            </div>
            <button className="bg-white text-black text-[10pt] flex items-center py-3 px-6 rounded-3xl">Book Appointment<span class="material-symbols-outlined pl-3 text-[11pt]">arrow_forward</span></button>
        </div>

        <div>
            <img src="home.PNG"/>
        </div>
    </div>
    </>
  )
}

export default Main