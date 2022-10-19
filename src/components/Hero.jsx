import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <section className='text-black'>
        <div className='max-w-[800px] mt-[-120px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#d76753] font-bold md:text-2xl'>Growing sweet making Sugar</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 md:mb-2'>Grow with sugar.</h1>
            <div className='flex justify-center items-center mx-auto'>
                <p className='md:text-4xl sm:text-3xl text-l font-bold'>
                    Fast, Fat and Sweet
                </p>
                <Typed  
                    className='md:text-4xl sm:text-3xl text-l font-bold text-white pl-4'
                    strings={['SUGAR.', 'ШЕЋЕР.']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-700 mt-2'>
                Sugar snaps powder marshmallow muffin cotton candy marzipan cotton candy.
            </p>
            <button className='bg-[#d76753] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Sugared</button>
        </div>
    </section>
  )
}

export default Hero