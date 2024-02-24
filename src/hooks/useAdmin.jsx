import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxios from './useAxios';

const useAdmin = () => {

    const {user} = useContext(AuthContext)
    const [isAdmin ,setIsAdmin] = useState(false)
    
    useEffect(() => {
        if (user?.email === "admin@gmail.com") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [user]);

    return [isAdmin]



};

export default useAdmin;