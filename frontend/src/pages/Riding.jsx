import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/Home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-2xl right-2 top-2'>
                <i className=" text-2xl font-bold ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""/>
            </div>

            <div className='h-1/2 p-4'>
            <div>
                <div className="relative flex h-20 w-full items-center justify-between overflow-hidden">
                    <img className="relative z-10 h-12 w-auto" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Uber Go" />
                    <div className='text-right'>
                        <h2 className='text-lg font-bold'>test-dirver</h2>
                        <h3 className='text-xl -mb-1 -mt-1'>P43D33 </h3>
                        <p className=' text-gray-600'>Tata safari </p>
                    </div>
                </div>
                <div className='w-full mt-5'> 
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-600'>
                        <i className="text-lg font-medium ri-map-pin-range-line"></i>
                        <div>
                            <h3 className='text-lg'>34-KM-Alpha-Street</h3>
                            <p className='text-base text-gray-600'>Varansi, Sunderpur</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="text-lg font-medium ri-money-rupee-circle-line"></i>
                        <div>
                            <h3 className='text-lg'>₹ 193.13</h3>
                            <p className='text-base font-bold text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>
            </div>
                <button className='w-full mt-5 bg-green-500 font-bold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding