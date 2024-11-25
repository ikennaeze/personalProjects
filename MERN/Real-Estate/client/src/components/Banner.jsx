import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="flex justify-center items-center mx-32 py-16 px-10 bg-[#5f6fff]">
      <div>
        <h1 className="text-white text-[28pt] font-semibold">Book Appointment With 100+ Trusted Realtors</h1>
        <button className="bg-white text-black p-3 rounded-full mt-4 text-[10pt]">Create Account</button>
      </div>

      <div>
        <img src="home.PNG" alt="" />
      </div>
    </div>
    </>
  )
}

export default Banner