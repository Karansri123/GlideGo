/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const LocationSearchPanel = (props) => {
    const location = [
        "Polytechnic Chauraha Lucknow, Uttar Pradesh",
        "Gomti nagar Lucknow, Uttar Pradesh",
        "Hazratganj Lucknow, Uttar Pradesh",
        "Indira Nagar Lucknow, Uttar Pradesh",
        "Aliganj Lucknow, Uttar Pradesh",
    ];

    return (
        <div>
            {/* this is just a sample data */}
            {
                location.map((ele, idx) => (
                    <div
                        key={idx}
                        onClick={() => {
                            props.setVehiclePanel(true);
                            props.setPanelOpen(false);
                        }}
                        className='flex gap-2 my-2 border-gray-50 active:border-black border-2 p-3 rounded-xl items-center justify-start'
                    >
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{ele}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default LocationSearchPanel;
