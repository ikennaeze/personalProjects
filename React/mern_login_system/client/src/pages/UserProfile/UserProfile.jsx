import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context/userContext'

const UserProfile = () => {
    const {user} = useContext(UserContext)
    const [file, setFile] = useState()

    const handleUpload = (e) => {
        console.log(file);
    }

  return (
    <>
        <h1 className="font-['poppins'] text-center text-[24pt] text-[#31668e] font-bold mt-20 mb-5 pl-[1%] pr-[1%]">Thanks for logging in {!user ? "" : user.username}. Welcome to your profile.</h1>
        <p className="font-['poppins'] text-center text-[24pt] text-[#31668e] font-normal mt-10 mb-5 pl-[1%] pr-[1%]">...It's a work in progress but bear with me here 😭</p>

        {/* <div>
            <img src='who cares' />
        </div>

        <div>
            <label htmlFor="pfp-upload" className="cursor-pointer">Upload picture</label>
            <input type="file" id='pfp-upload' className="hidden" onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div> */}
    </>
  )
}

export default UserProfile