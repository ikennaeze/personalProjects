import React from 'react'
import about_image from '../components/assets_frontend/about_image.png'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
        <div className='flex flex-col mx-32'>
            <h1 className="text-center text-[20pt] py-10">ABOUT <span className="font-semibold">US</span></h1>

            <div className="flex items-center space-x-20">
                <img src={about_image} className="w-[400px]" />
                <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
                    <br /><br />
                    Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    <br /><br />
                    <span className='font-semibold'>Our Vision</span>
                    <br /><br />
                    Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
            </div>

            <div className="mt-6">
                <h1 className="text-[16pt] py-6">WHY <span className="font-semibold">CHOOSE US</span></h1>

                <div className="flex">
                    <div className='border-2 border-gray-400 p-16 space-y-6 duration-300 hover:bg-[#5f6fff] hover:text-white'>
                        <h1 className="font-semibold">EFFICIENCY:</h1>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
                    </div>

                    <div className='border-2 border-gray-400 border-l-0 p-16 space-y-6 duration-300 hover:bg-[#5f6fff] hover:text-white'>
                        <h1 className="font-semibold">CONVENIENCE:</h1>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>

                    <div className='border-2 border-gray-400 border-l-0 p-16 space-y-6 duration-300 hover:bg-[#5f6fff] hover:text-white'>
                        <h1 className="font-semibold">PERSONALIZATION:</h1>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default About