import React from 'react'

const VehiclePanel = (props) => {
    return (

        <div>
            <h5 className='p-1 text-center w-[94%] text-2xl absolute top-0'
                onClick={() => {
                    props.setVehiclePanel(false);
                }}
            ><i className="text-gray-800 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Choose a vehicle</h3>
            <div className='space-y-4'>
                {/* Uber Go */} 
                <div onClick={() => {
                    props.setconfirmRidePanel(true)
                }} className=' active:border-2 active:border-black flex items-center justify-between p-4  rounded-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer'>
                    <img className='h-12 w-auto mr-4' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Uber Go" />
                    <div className='flex-grow'>
                        <h3 className='text-lg font-bold text-gray-900 flex items-center'>
                            Uber Go
                            <span className='ml-2 text-gray-500 text-sm'>
                                <i className="ri-user-fill"></i> 4
                            </span>
                        </h3>
                        <h5 className='text-sm text-green-500 font-medium mt-1'>
                            2 min away
                        </h5>
                        <p className='text-xs text-gray-600 mt-1'>
                            Affordable, compact rides
                        </p>
                    </div>
                    <h2 className='text-xl font-bold text-gray-900'>Rs. 193</h2>
                </div>

                {/* Moto */}
                <div onClick={() => {
                    props.setconfirmRidePanel(true)
                }} className=' active:border-2 active:border-black flex items-center justify-between p-4  rounded-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer'>
                    <img className='h-12 w-auto mr-4' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="Moto" />
                    <div className='flex-grow'>
                        <h3 className='text-lg font-bold text-gray-900 flex items-center'>
                            Moto
                            <span className='ml-2 text-gray-500 text-sm'>
                                <i className="ri-user-fill"></i> 1
                            </span>
                        </h3>
                        <h5 className='text-sm text-green-500 font-medium mt-1'>
                            2 min away
                        </h5>
                        <p className='text-xs text-gray-600 mt-1'>
                            Affordable, Motorcycle ride
                        </p>
                    </div>
                    <h2 className='text-xl font-bold text-gray-900'>Rs. 65</h2>
                </div>

                {/* UberAuto */}
                <div onClick={() => {
                    props.setconfirmRidePanel(true)
                }} className=' active:border-2 active:border-black flex items-center justify-between p-4  rounded-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer'>
                    <img className='h-12 w-auto mr-4' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="UberAuto" />
                    <div className='flex-grow'>
                        <h3 className='text-lg font-bold text-gray-900 flex items-center'>
                            UberAuto
                            <span className='ml-2 text-gray-500 text-sm'>
                                <i className="ri-user-fill"></i> 1
                            </span>
                        </h3>
                        <h5 className='text-sm text-green-500 font-medium mt-1'>
                            2 min away
                        </h5>
                        <p className='text-xs text-gray-600 mt-1'>
                            Affordable, Auto ride
                        </p>
                    </div>
                    <h2 className='text-xl font-bold text-gray-900'>Rs. 165</h2>
                </div>

            </div>

        </div>

    )
}

export default VehiclePanel