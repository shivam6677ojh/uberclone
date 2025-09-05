import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>

            <h5 className='p-1 text-center w-[94%] text-2xl absolute top-0'
                onClick={() => {
                    props.setVehiclePanel(false);
                }}
            ><i className="text-gray-800 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Confirm your Ride</h3>
            <div className='flex gap-2 justify-between items-center flex-col '>
                <img className='h-24 w-auto mr-4' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Uber Go" />
            </div>
            <div >
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <button className='w-full bg-green-500 font-bold p-2 rounded-lg'>Confirm</button>
            </div>

        </div>
    )
}

export default ConfirmRide