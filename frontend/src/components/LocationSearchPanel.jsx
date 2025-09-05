import React from 'react'

const LocationSearchPanel = (props) => {

  // sanple array for location

  const locations = [
    "24B, New CAFE, Gurudham Colony, Varanasi, 221001",
    "15A, Sunderpur, BHU, Varanasi, 221005",
    "45, Lanka, Varanasi, 221006",
    "15A, Sunderpur, BHU, Varanasi, 221005",
    "15A, Sunderpur, BHU, Varanasi, 221005"
  ]


  return (

    <div> 
      {
        locations.map(function (ele, idx) {
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setpanelopen(false)
          }} className='active:border-2 border-balck rounded-lg gap-3 py-1 px-4 flex mb-1 items-center justify-start space-x-2'>
            <h2 className="text-xl">
              <i className="ri-map-pin-line text-red-500"></i>
            </h2>
            <h4 className="text-lg font-semibold">{ele}</h4>
          </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel