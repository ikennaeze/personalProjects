import React from 'react'
import profilePic from '../components/assets_frontend/profile_pic.png'
import uploadArea from '../components/assets_frontend/upload_area.png'

const Profile = () => {
  return (
    <>
    <div className="mx-32">
        <div className="flex items-center space-x-6">
            <img src={profilePic} />
            <img src={uploadArea}  />
        </div>

        <div>
            <div className="mt-6">
                <h1 className="text-[20pt] font-semibold">Edward Vincent</h1>
                <hr className='flex h-[2px] bg-gray-400 mt-1'/>
            </div>

            <div className="space-y-3">
                <h1 className="text-gray-600 underline">CONTACT INFORMATION</h1>

                <div className="space-y-3">
                    <div className="flex space-x-20">
                        <p>Email:</p>
                        <p className="text-teal-700">richardoneswap@gmail.com</p>
                    </div>
                    
                    <div className="flex space-x-20">
                        <p>Phone:</p>
                        <p className="text-teal-700">+1 123 456 7890</p>
                    </div>
                    
                    <div className="flex space-x-20">
                        <p>Email:</p>
                        <p className="text-teal-700">richardoneswap@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile