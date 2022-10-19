import React from 'react'
import vanilin_1 from '../assets/vanilin-1.png';
import vanilin_2 from '../assets/vanilin-2.png';
import vanilin_3 from '../assets/vanilin-3.png';


const Cards = () => {
  return (
    <section className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={vanilin_1} alt="vanilin_secer" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500kg to you</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Get weight up to 15kg</p>
                </div>
                <button className='bg-[#d76753] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-white'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={vanilin_2} alt="vanilin_secer" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold '>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>900kg to you</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Get weight up to 30kg</p>
                </div>
                <button className='bg-[#d76753] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-white'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={vanilin_3} alt="vanilin_secer" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold '>$279</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>3000kg to you</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Get weight up to 45kg</p>
                </div>
                <button className='bg-[#d76753] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-white'>Start Trail</button>
            </div>
        </div>
    </section>
  )
}

export default Cards