import React, { useState } from 'react'
import logo from '../components/assets_frontend/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [currentMenuOpen, setCurrentMenuOpen] = useState("")

  return (
    <>
    <div className="mx-32 py-5 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <ul className="flex items-center space-x-6">
            <Link to={'/'}><li className="flex flex-col items-center justify-center gap-2 cursor-pointer" onClick={() => {setCurrentMenuOpen("Home")}}>HOME {currentMenuOpen == "Home" ? <hr className="border-none rounded-xl bg-[#5f6fff] w-[66%] h-[2px]" /> : <></>}</li></Link>
            <Link to={'/all-doctors'}><li className="flex flex-col items-center justify-center gap-2 cursor-pointer" onClick={() => {setCurrentMenuOpen("All Doctors")}}>ALL DOCTORS {currentMenuOpen == "All Doctors" ? <hr className="border-none rounded-xl bg-[#5f6fff] w-[66%] h-[2px]" /> : <></>}</li></Link>
            <Link to={'/about'}><li className="flex flex-col items-center justify-center gap-2 cursor-pointer" onClick={() => {setCurrentMenuOpen("About")}}> ABOUT {currentMenuOpen == "About" ? <hr className="border-none rounded-xl bg-[#5f6fff] w-[66%] h-[2px]" /> : <></>}</li></Link>
            <Link to={'/contact'}><li className="flex flex-col items-center justify-center gap-2 cursor-pointer" onClick={() => {setCurrentMenuOpen("Contact")}}>CONTACT {currentMenuOpen == "Contact" ? <hr className="border-none rounded-xl bg-[#5f6fff] w-[66%] h-[2px]" /> : <></>}</li></Link>
            <Link to={'admin-panel'}><li className="flex flex-col items-center justify-center gap-2 cursor-pointer" onClick={() => {}}><button className="border border-gray-500 px-6 py-1.5 rounded-full">Admin Panel</button></li></Link>
          </ul>
        </div>

        <div>
          <Link to={'/signup'}><button className="bg-[#5f6fff] py-3 px-8 rounded-full text-white font-medium text-[11pt] duration-300 hover:bg-[#717dea]">Create account</button></Link>
        </div>
      </div>

      <div className="bg-gray-400 h-[2px]"></div>
    </div>
    </>
  )
}

export default Navbar