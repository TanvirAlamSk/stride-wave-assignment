import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../context/Authprovider';

const useName = () => {
    const { user } = useContext(authContext)
    const [userName, setUserName] = useState("")
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `bearer ${localStorage.getItem("recipe-easy-token")}`
            },
        })
            .then((response) => response.json())
            .then((data) => setUserName(data.name))
    }, [user.email])
    console.log(userName)
    return userName
};

export default useName;