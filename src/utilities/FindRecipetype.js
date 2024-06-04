import React, { useEffect, useState } from 'react';

const FindRecipetype = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
    }, [])
    return recipes
};

export default FindRecipetype;