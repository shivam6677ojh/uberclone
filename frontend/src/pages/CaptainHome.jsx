import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopup'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = () => {

  const [ridePopUpPanel, setridePopUpPanel] = useState(true)
  const [ConfirmridePopUpPanel, setConfirmridePopUpPanel] = useState(false)
  const ridePopUpRef = useRef(null)
  const ConfirmridePopUpRef = useRef(null)

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(0)',

      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(100%)',
  
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    
    if (ConfirmridePopUpPanel) {
      gsap.to(ConfirmridePopUpRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(ConfirmridePopUpRef.current, {
        transform: 'translateY(100%)',

      });
    }
  }, [ConfirmridePopUpPanel]);


  return (
    <div className='h-screen'>
      <div className='flex fixed w-screen top-0 items-center justify-between'>
        <img className='top-2 ml-4 w-20 absolute' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
        <Link to='/Home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-2xl right-2 top-2'>
          <i className=" text-2xl font-bold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-[60%]'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='p-6'>
        <CaptainDetails />
      </div>

      <div ref={ridePopUpRef} className='fixed z-10 bottom-0 translate-y-full  bg-white w-full px-4 py-6 shadow-2xl rounded-t-3xl'>
        <RidePopUp setridePopUpPanel={setridePopUpPanel} setConfirmridePopUpPanel={setConfirmridePopUpPanel} />
      </div>

      <div ref={ConfirmridePopUpRef} className='fixed h-screen z-10 bottom-0 translate-y-full  bg-white w-full px-4 py-6 shadow-2xl rounded-t-3xl'>
        <ConfirmRidePopUp setConfirmridePopUpPanel={setConfirmridePopUpPanel} setridePopUpPanel={setridePopUpPanel} />
      </div>

      

    </div>
  )
}

export default CaptainHome

