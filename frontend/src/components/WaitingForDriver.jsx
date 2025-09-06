import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>

            <h5 className='p-1 text-center w-[94%] text-2xl absolute top-0'
                onClick={() => {
                    props.setWaitingRiderPanel(false)
                }}

            ><i className="text-gray-800 ri-arrow-down-wide-line"></i></h5>


            <div>
                <div className="relative flex h-40 w-full items-center justify-between overflow-hidden">
                    <img className="relative z-10 h-12 w-auto" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Uber Go" />
                    <div className='text-right'>
                        <h2 className='text-lg font-bold'>test-dirver</h2>
                        <h3 className='text-xl -mb-1 -mt-1'>P43D33 </h3>
                        <p className=' text-gray-600'>Tata safari </p>
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-600'>
                        <i className=" text-lg font-medium ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg'>34-KM-Alpha-Street</h3>
                            <p className='text-base text-gray-600'>Varansi, Sunderpur</p>
                        </div>
                    </div>
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
        </div>
    )
}

export default WaitingForDriver