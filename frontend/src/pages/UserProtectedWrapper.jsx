import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext.jsx";
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useContext(UserDataContext);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            if (res.status === 200) {
                setUser(res.data.user);
                setIsLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login');
        });
    }, [token, navigate, setUser]); // dependencies

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    return <>{children}</>;
}

export default UserProtectedWrapper;
