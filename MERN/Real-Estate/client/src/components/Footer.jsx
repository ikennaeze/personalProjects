import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="mx-32 my-10 space-y-6">
      <div className="flex justify-between space-x-28">
        <div className="">
          <h1 className="text-[16pt] font-medium mb-4">COMPANY NAME</h1>
          <p className="mr-32">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <h1 className="text-[16pt] font-medium mb-4">COMPANY</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h1 className="text-[16pt] font-medium mb-4">GET IN TOUCH</h1>
          <ul>
            <li>+0-000-000-000</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="bg-gray-400 h-[1px]"></div>
        <p className="text-center">Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer