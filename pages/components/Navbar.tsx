import React from 'react'
import {BsSearch,BsFillGrid3X3GapFill} from "react-icons/bs"
import {AiFillHome,AiOutlineMessage} from "react-icons/ai"
import {FiUsers} from "react-icons/fi"
import {MdWork} from "react-icons/md";
import {FaBell,FaDev} from "react-icons/fa"

function Navbar() {
  return (
    <div className="bg-white w-full h-16 flex items-center text-sm text-gray-600 pl-6">
        <div className='flex'>
        <FaDev className="h-10 w-10 mr-6"/>
        </div>
        <div className="h-10 items-center bg-gray-100 pl-4 rounded-[4px] hidden lg:inline-flex">
         <BsSearch  className="h-4 w-4"/>
         <input 
         type="text" 
         placeholder="Search" 
         className="bg-transparent text-gray-300 w-72 pl-4 text-[16px]"/>
         </div>
         <div className='flex'>
          <div><BsSearch className='h-[26px] w-[26px]'/></div>
          <h3>Search</h3>
         </div>
         <div className='flex'>
          <div><AiFillHome className='h-[26px] w-[26px]'/></div>
          <h3>Home</h3>
         </div>
         <div className='flex-row'>
          <div><FaBell className='h-[26px] w-[26px]'/></div>
          <h3>Notifications</h3>
         </div>
         <div className='flex'>
          <div><FiUsers className='h-[26px] w-[26px]'/></div>
          <h3>Network</h3>
         </div>
         <div className='flex'>
          <div><MdWork className='h-[26px] w-[26px]'/></div>
          <h3>Jobs</h3>
         </div>
         <div className='flex'>
          <div><AiOutlineMessage className='h-[26px] w-[26px]'/></div>
         <h3>Messaging</h3>
         </div>
      </div>
  )
}

export default Navbar