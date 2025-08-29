import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`  // ✅ fixed spelling
            }
        })
        .then((res) => {
            if (res.status === 200) {   // ✅ fixed spelling
                setCaptain(res.data.captain);
                setIsLoading(false);
            }
        })
        .catch((err) => {
            console.error(err);
            localStorage.removeItem('token');
            navigate('/captain-login');
        });
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    return <>{children}</>;
};

export default CaptainProtectedWrapper;
