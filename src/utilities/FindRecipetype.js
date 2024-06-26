import React, { useEffect, useState } from 'react';

const FindRecipetype = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("https://recipe-easy-server.onrender.com/recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
    }, [])
    return recipes
};

export default FindRecipetype;