import React from 'react'
import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav= () => {
        setNav(!nav)
    }

  return (
    <div className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#ad3621]'>
            SUGAR.
        </h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer font-bold hover:text-[#c24630]'>Home</li>
            <li className='p-4 cursor-pointer font-bold hover:text-[#c24630]'>Company</li>
            <li className='p-4 cursor-pointer font-bold hover:text-[#c24630]'>Resources</li>
            <li className='p-4 cursor-pointer font-bold hover:text-[#c24630]'>About</li>
            <li className='p-4 cursor-pointer font-bold hover:text-[#c24630]'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#dbb8b2] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#ad3621] m-4 mt-8'>
            SUGAR.
        </h1>
            <ul className='uppercase p-3'>
                <li className='p-4 border-b border-gray-400'>Home</li>
                <li className='p-4 border-b border-gray-400'>Company</li>
                <li className='p-4 border-b border-gray-400'>Resources</li>
                <li className='p-4 border-b border-gray-400'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar