import React from 'react'

const CaptainDetails = () => {
    return (
        <div> 
            <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center justify-start gap-4'>
                <img className='h-12 w-12 rounded-full object-cover shadow-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvv44WNcZxkoWBZfS56ZK2j6T9mRU_ZxBSQ&s" alt="Captain's profile" />
                <div>
                    <h4 className='text-lg font-bold text-gray-800'>Saurabh Kumar</h4>
                    <p className='text-sm text-gray-500'>Gold Captain</p>
                </div>
            </div>
            <div className='text-right'>
                <h4 className='text-2xl font-semibold text-gray-900'>₹203.34</h4>
                <p className='text-sm font-medium text-gray-500'>Today's Earnings</p>
            </div>
        </div>

            <div className='flex justify-around items-center bg-slate-100 rounded-xl p-4'>
                <div className='text-center'>
                    <i className="text-3xl text-blue-500 ri-timer-2-line"></i>
                    <h5 className='text-xl font-bold mt-1 text-gray-800'>10.2</h5>
                    <p className='text-xs text-gray-500'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl text-green-500 ri-road-map-line"></i>
                    <h5 className='text-xl font-bold mt-1 text-gray-800'>12</h5>
                    <p className='text-xs text-gray-500'>Total Trips</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl text-amber-500 ri-star-fill"></i>
                    <h5 className='text-xl font-bold mt-1 text-gray-800'>4.9</h5>
                    <p className='text-xs text-gray-500'>Rating</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
