import React from 'react'
import {BiSearch} from "react-icons/bi"
import {FiShoppingCart} from "react-icons/fi"
const Navbar = () => {
  return (
   <nav className='fixed w-[90vw] h-[8vh] bg-white z-[999] md:left-20  rounded-xl left-4'>
        <div className='flex justify-between items-center'>
            <div className='my-3'>
                <h3 className='text-xl mx-10'>Logo</h3>
            </div>
            <div className='text-gray-600 md:block hidden px-7 py-2 font-bold'>
                <ul className='flex items-center gap-10 py-2 text-lg'>
                    <a href='#'>Home</a>
                    <a href='#'>Product</a>
                    <a href='#'>About</a>
                    <a href='#'>Support</a>
                </ul>
            </div>
            <div className='flex items-center gap-5 py-2 text-2xl mx-10'>
                <BiSearch />
                <FiShoppingCart />
            </div>
        </div>
   </nav>
  )
}

export default Navbar