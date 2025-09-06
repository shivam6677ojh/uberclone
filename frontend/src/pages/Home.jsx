import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel.jsx'
import VehiclePanel from '../components/VehiclePanel.jsx'
import ConfirmRide from '../components/ConfirmRide.jsx'
import LookingForDriver from '../components/LookingForDriver.jsx'
import WaitingForDriver from '../components/WaitingForDriver.jsx'

const Home = () => {
    const [pickup, setpickup] = useState('')
    const [destination, setdestination] = useState('')
    const [panelopen, setpanelopen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelcloseRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const VehicleFoundRef = useRef(null)
    const WaitingRiderRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setconfirmRidePanel] = useState(false)
    const [VehicleFoundPanel, setVehicleFoundPanel] = useState(false)
    const [WaitingRiderPanel, setWaitingRiderPanel] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(function () {
        if (panelopen) {
            gsap.to(panelRef.current, {
                height: '75%',
                opacity: 1
            })
            gsap.to(panelcloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                opacity: 0
            })
            gsap.to(panelcloseRef.current, {
                opacity: 0
            })
        }
    }, [panelopen])

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })  
        }else{
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    },[vehiclePanel])

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })  
        }else{
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    },[confirmRidePanel])

    useGSAP(function(){
        if(VehicleFoundPanel){
            gsap.to(VehicleFoundRef.current, {
                transform: 'translateY(0)'
            })  
        }else{
            gsap.to(VehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    },[VehicleFoundPanel])

    useGSAP(function(){
        if(WaitingRiderPanel){
            gsap.to(WaitingRiderRef.current, {
                transform: 'translateY(0)'
            })  
        }else{
            gsap.to(WaitingRiderRef.current, {
                transform: 'translateY(100%)'
            })
        }
    },[WaitingRiderPanel])

    return (
        <>
            <div className='h-screen relative overflow-hidden'>
                <img
                    className='mt-5 ml-10 w-20 absolute'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s'
                    alt='Brand logo'
                />

                <div onClick={()=>{
                    setVehiclePanel(false)
                }} className='h-screen w-screen'>
                    <img
                        className='h-full w-full object-cover'
                        src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
                        alt=''
                    />
                </div>

                {/* Bottom sheet container */}
                <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                    {/* Sheet header/content */}
                    <div className='h-1/4 bg-white relative flex items-start bottom-0'>
                        <div className='w-full max-w-3xl mx-auto p-5'>
                            <h5
                                ref={panelcloseRef}
                                onClick={() => {
                                    setpanelopen(false)
                                }}
                                className='absolute top-3 right-4 text-2xl opacity-0'
                            >
                                <i className="ri-arrow-down-wide-line"></i>
                            </h5>

                            <h4 className='text-3xl font-semibold'>Find a trip</h4>

                            {/* Inputs stack */}
                            <form
                                onSubmit={(e) => { submitHandler(e) }}
                                className='relative flex flex-col space-y-3 mt-3'
                            >
                                {/* Decorative line aligned to inputs */}
                                <div className='absolute left-12 top-5 bottom-1 w-1 bg-gray-800 rounded-full'></div>

                                <div className='pl-6'>
                                    <input
                                        onClick={() => { setpanelopen(true) }}
                                        value={pickup}
                                        onChange={(e) => { setpickup(e.target.value) }}
                                        className='w-full bg-gray-200 px-8 py-2 text-lg rounded-lg border border-gray-800'
                                        type='text'
                                        placeholder='Add a pick-up location'
                                    />
                                </div>

                                <div className='pl-6'>
                                    <input
                                        onClick={() => { setpanelopen(true) }}
                                        value={destination}
                                        onChange={(e) => { setdestination(e.target.value) }}
                                        className='w-full bg-gray-200 px-8 py-2 text-lg rounded-lg border border-gray-800'
                                        type='text'
                                        placeholder='Enter your destination'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Expanding panel */}
                    <div ref={panelRef} className='bg-white h-0'>
                        <div className='w-full max-w-3xl mx-auto p-5'>
                            <LocationSearchPanel setpanelopen={setpanelopen}   setVehiclePanel={setVehiclePanel} />
                        </div>
                    </div>
                </div>

                <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-4 py-6 shadow-2xl rounded-t-3xl'>
                    <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setVehiclePanel={setVehiclePanel} />
                </div>

                <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-4 py-6 shadow-2xl rounded-t-3xl'>
                    <ConfirmRide  setconfirmRidePanel={setconfirmRidePanel}  setVehicleFoundPanel={setVehicleFoundPanel} />
                </div>

                <div ref={VehicleFoundRef}  className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-4 py-6 shadow-2xl rounded-t-3xl'>
                    <LookingForDriver setVehicleFoundPanel={setVehicleFoundPanel} />
                </div>

                <div ref={WaitingRiderRef}  className='fixed z-10 bottom-0 translate-y-full  bg-white w-full px-4 py-6 shadow-2xl rounded-t-3xl'>
                    <WaitingForDriver setWaitingRiderPanel={setWaitingRiderPanel} />
                </div>

            </div>
        </>
    )
}

export default Home

