import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import Logo from '../assets/images/logo.svg'

function Nav() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className='flex flex-row m-5'>
                <div className='ml-8'>
                    <img src={Logo} alt='/' />
                </div>
                <div className=" flex justify-end w-full  h-50 px-4  text-black">
                    {/* {mobile} */}
                    <ul className='flex-row  items-center hidden md:flex '>
                        <li className=' hover:text-pink-600 cursor-pointer'>Home</li>
                        <li className=' hover:text-pink-600 cursor-pointer'>New</li>
                        <li className=' hover:text-pink-600 cursor-pointer'>Popular</li>
                        <li className=' hover:text-pink-600 cursor-pointer'>Trending</li>
                        <li className=' hover:text-pink-600 cursor-pointer'>Categories</li>
                    </ul>
                    {/* {hamburger} */}
                    <div onClick={handleNav} className='md:hidden z-10'>
                        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}

                    </div>
                    {/* Mobile menu dropdown */}
                    <div onClick={handleNav} className={
                        nav ? 'absolute text-black  left-0 top-0 mx-[40%] w-full h-full bg-gray-50/90 px-4 py-7 flex flex-col' : 'absolute left-0  top-[-100%]'
                    }>
                        <ul className=''>
                            <li className=' hover:text-pink-600 cursor-pointer'>Home</li>
                            <li className=' hover:text-pink-600 cursor-pointer'>New</li>
                            <li className=' hover:text-pink-600 cursor-pointer'>Popular</li>
                            <li className=' hover:text-pink-600 cursor-pointer'>Trending</li>
                            <li className=' hover:text-pink-600 cursor-pointer'>Categories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav