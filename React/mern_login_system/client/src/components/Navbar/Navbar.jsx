import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="bg-[#5c8baf]">
        <div className='flex space-x-24 pt-3 pb-3'>
            <a href='/' className="pl-10 text-[16pt] text-[#235174] font-['poppins'] font-bold">Ikenna's Login System</a>
            <div className="flex items-center space-x-8 font-['roboto'] text-[#1f4765] text-[14pt] font-light">
                <Link to="/" className="hover:underline hover:text-[#97bad5] duration-300">HOME</Link>
                <Link to="/register" className="hover:underline hover:text-[#97bad5] duration-300">REGISTER</Link>
                <Link to="/login" className="hover:underline hover:text-[#97bad5] duration-300">LOGIN</Link>
            </div>
        </div>
     </nav>
    </>
  )
}

export default Navbar