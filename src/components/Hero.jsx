import React from 'react'
import hero from "../assets/images/hero1.png"

const Hero = () => {
  return (
    <div className='min-h-full w-full flex md:flex-row flex-col'>
        <div className='flex flex-1 md:mt-40 mt-10 md:mx-32 mx-16'>
            <div className='md:text-left text-center mt-28'>
                <h1 className='md:text-6xl text-2xl md:leading-normal leading-10 text-gray-600 font-bold font-hero'>
                    Experts with mega<br /> vision
                </h1>
                <p className='text-lg text-gray-600 mt-8'>Best agency is dolor sit amet, consecteture some adipiscing elit, sed do eiusmod temp incinim veniam quis nostrud</p>
                <div className='flex md:justify-start justify-center'>
                    <button className='text-white mt-10 text-lg bg-[#1388E5] rounded-lg w-[150px] h-[50px] hover:bg-white hover:text-gray-600 hover:border-2 hover:border-[#1388E5]'>Explore Now</button>
                </div>
            </div>
        </div>
        <div className='flex-1 mt-20 flex items-center justify-center h-full'>
            <img src={hero} className="w-full"/>
        </div>
    </div>
  )
}

export default Hero