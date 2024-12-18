/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captainData, setCaptainData } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [captain, setCaptain] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      } catch (err) {
        localStorage.removeItem("token");
        setIsLoading(false); 
        navigate("/captain-login"); 
      }
    };

    fetchCaptainProfile();
  }, [token, navigate]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
