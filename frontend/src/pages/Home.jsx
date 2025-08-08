import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-cover bg-center bg-[url(https://img.freepik.com/premium-photo/traffic-signal-road_1067450-172.jpg)] h-screen w-full flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                {/* Logo */}
                <img
                    className='w-24 mb-8'
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber logo"
                />
                {/* Card */}
                <div className='bg-white py-8 px-6 rounded-lg shadow-lg flex flex-col items-center'>
                    <h2 className='text-2xl font-bold mb-4'>Get Started with Uber</h2>
                    <Link
                        to='/login'
                        className='flex items-center justify-center cursor-pointer w-full bg-black text-white py-3 rounded'
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
