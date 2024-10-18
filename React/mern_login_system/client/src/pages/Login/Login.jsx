import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        const {username, password} = data

        try {
            const {data} = await axios.post('/login', {
                username, password
            })

            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Login successful, Welcome')
                navigate('/profile')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className="flex justify-center my-[6%] mb-40">
            <div className="flex flex-col items-center bg-[#97bad5] w-[30%] rounded-xl p-8">
                <h1 className="font-['poppins'] text-center text-[20pt] text-[#31668e] font-bold mb-5">Ikenna's Login Page</h1>
                <form action="" className='space-y-4 w-[80%]' onSubmit={loginUser}>
                    <div>
                        <label htmlFor="username" className="text-[#1f4765] text-[10pt]">USERNAME</label> <br />
                        <input type="text" name="username" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Enter your username' value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-[#1f4765] text-[10pt]">PASSWORD</label> <br />
                        <input type="password" name="password" className="rounded-md p-2.5 w-[100%] border-[2.2px] border-white focus:border-[#5c8baf] focus:outline-none duration-[400ms]" placeholder='Enter your password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </div>
                    
                    <p className="font-['poppins'] text-[11pt] text-[#1f4765] pt-4">Don't have an account? <a href="/register" className="font-bold hover:underline">Register here</a></p>
                    <div className="flex justify-center"><button className="bg-[#5c8baf] pt-2 pb-2 pl-6 pr-6 text-white font-['poppins'] hover:bg-[#6fa5ce] duration-[400ms]">LOGIN</button></div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login