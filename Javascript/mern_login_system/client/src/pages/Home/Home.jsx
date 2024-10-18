import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <h1 className="font-['poppins'] text-center text-[34pt] text-[#31668e] font-bold mt-20 mb-5 pl-[15%] pr-[15%]">Hello fellow human, I just made myself a login system with MERN Stack and would be happy if you would try it out by making an account &nbsp; :)</h1>
        <div className="flex justify-center"><a type='button' className="bg-[#5c8baf] mt-10 pt-5 pb-5 pl-20 pr-20 text-[20pt] text-white font-['poppins'] hover:bg-[#6fa5ce] duration-[400ms]" href='/register'>REGISTER HERE</a></div>
    </>
  )
}

export default Home