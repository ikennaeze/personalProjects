import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <div className="m-auto my-16 rounded-xl w-[30%]" style={{boxShadow: "10px 10px 50px 0px rgba(0,0,0,0.32)"}}>
        <div className="flex flex-col items-center space-y-8 text-gray-600 py-16">
            <div className="space-y-2 text-left">
                <h1 className="text-[20pt] font-medium">Create Account</h1>
                <p className="text-[11pt]">Please sign up to book an appointment</p>
            </div>

            <div className="space-y-4">
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="fullname" className="text-[11pt]">Your Full name:</label>
                    <input type="text" id="fullname" className="border border-gray-400 p-2 rounded-md outline-none" />
                </div>

                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-[11pt]">Your Email:</label>
                    <input type="email" id="email" className="border border-gray-400 p-2 rounded-md outline-none" />
                </div>

                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="password" className="text-[11pt]">Your Password:</label>
                    <input type="password" id=" password" className="border border-gray-400 p-2 rounded-md outline-none" />
                </div>
            </div>

            <button className="rounded-lg bg-[#5f6fff] text-white px-[18%] py-3 font-medium text-[14pt]">Create Account</button>

            <p>Already have an account? <Link to={'/login'}><b className="hover:underline cursor-pointer">Login here</b></Link></p>
        </div>
    </div>
    </>
  )
}

export default SignUp