import React from 'react'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaRedditSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#ad3621]'>SUGAR.</h1>
            <p className='py-4'>
            Cake pastry candy chocolate bar caramels wafer gummies. Caramels chocolate bar jelly beans jelly soufflé muffin sweet bonbon.
            Chocolate bar carrot cake jelly-o candy lollipop. Cake icing tart marshmallow brownie oat cake shortbread halvah.
            </p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaTwitterSquare  size={30} />
                <FaFacebookSquare  size={30} />
                <FaInstagramSquare  size={30} />
                <FaRedditSquare size={30}  />
            </div>
        </div>
        <div  className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-900'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-900'>Documentation</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-900'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-900'>Sweetness</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
        </div>
       
        
    </section>
  )
}

export default Footer