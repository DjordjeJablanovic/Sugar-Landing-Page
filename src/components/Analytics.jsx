import React from 'react'
import secer_crvenka from '../assets/secer_crvenka.png';

const Analytics = () => {
  return (
    <section className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] sm:w-[400px] mx-auto my-4' src={secer_crvenka} alt="secer_crvenka" />
            <div className='flex flex-col justify-center mt-4'>
                <p className='text-small text-[#d76753] font-bold'>SUGAR ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Sugar Analytics Centrally</h1>
                <p className=''>Sesame snaps powder marshmallow muffin cotton candy marzipan cotton candy sesame snaps macaroon. Oat cake donut shortbread pie jujubes caramels. Chupa chups chupa chups donut bear claw croissant.</p>
                <button className='bg-[#d76753] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 text-white'>Get Sugared</button>
            </div>
        </div>
    </section>
  )
}

export default Analytics