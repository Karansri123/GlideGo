/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding:24
      });
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding:0
      });
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5 mix-blend-multiply"
        src="https://www.logosvgpng.com/wp-content/uploads/2021/12/glide-apps-logo-vector.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* temp image */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0  w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className="absolute opacity-0 top-6 right-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[44%] left-10 bg-gray-700 rounded-full "></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5  "
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
