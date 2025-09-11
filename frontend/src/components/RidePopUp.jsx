import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[94%] text-2xl absolute top-0'
                onClick={() => {
                    props.setridePopUpPanel(false)
                }}
            ><i className="text-gray-800 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Ride Available !!</h3>
            <div className=' flex items-center justify-between mt-3 bg-yellow-400 rounded-xl p-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-15 w-15 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvv44WNcZxkoWBZfS56ZK2j6T9mRU_ZxBSQ&s" alt="" />
                    <h2 className='text-xl font-medium'>Harsh patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 km</h5>
            </div>

            <div>
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
                    <button
                        onClick={() => {
                            props.setConfirmridePopUpPanel(true)
                        }}
                        className="w-full mt-5 bg-green-500 font-bold p-2 rounded-lg"
                    >
                        Accept
                    </button>
                   
                    <button onClick={() => {
                        props.setridePopUpPanel(false)
                    }} className='w-full mt-3 bg-gray-500 font-bold p-2 rounded-lg'>Ignore</button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp