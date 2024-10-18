import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [data, setData] = useState({
        full_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const navigate = useNavigate()

    const registerUser = async(e) => {
        e.preventDefault()
        const {full_name, username, email, password, confirm_password} = data
        try {
            const {data} = await axios.post('/register', {
                full_name, username, email, password, confirm_password
            })

            if(data.error) {
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Registration successful, welcome.')
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className="flex justify-center my-[6%] mb-40">
            <div className="flex flex-col items-center bg-[#97bad5] w-[30%] rounded-xl p-8">
                <h1 className="font-['poppins'] text-center text-[20pt] text-[#31668e] font-bold mb-5">Ikenna's Registration Page</h1>
                <form action="" className='space-y-4 w-[80%]' onSubmit={registerUser}>
                    <div>
                        <label htmlFor="full-name" className="text-[#1f4765] text-[10pt]">FULL NAME</label> <br />
                        <input type="text" name="full-name" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Enter your full name' value={data.full_name} onChange={(e) => setData({...data, full_name: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="username" className="text-[#1f4765] text-[10pt]">USERNAME</label> <br />
                        <input type="text" name="username" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Enter your username' value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="email" className="text-[#1f4765] text-[10pt]">EMAIL</label> <br />
                        <input type="email" name="email" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Enter your email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-[#1f4765] text-[10pt]">PASSWORD</label> <br />
                        <input type="password" name="password" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Enter your password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="text-[#1f4765] text-[10pt]">CONFIRM PASSWORD</label> <br />
                        <input type="password" name="confirm-password" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Confirm your password' value={data.confirm_password} onChange={(e) => setData({...data, confirm_password: e.target.value})}/>
                    </div>
                    
                    <p className="font-['poppins'] text-[11pt] text-[#1f4765] pt-4">Already have an account? <a href="/login" className="font-bold hover:underline">Login here</a></p>
                    <div className="flex justify-center"><button className="bg-[#5c8baf] pt-2 pb-2 pl-6 pr-6 text-white font-['poppins'] hover:bg-[#6fa5ce] duration-[400ms]">REGISTER</button></div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register