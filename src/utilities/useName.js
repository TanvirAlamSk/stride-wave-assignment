import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../context/Authprovider';

const useName = () => {
    const { user } = useContext(authContext)
    const [userName, setUserName] = useState("")
    useEffect(() => {
        fetch(`https://recipe-easy-server.onrender.com/users?email=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `bearer ${localStorage.getItem("recipe-easy-token")}`
            },
        })
            .then((response) => response.json())
            .then((data) => setUserName(data.name))
    }, [user.email])
    return userName
};

export default useName;