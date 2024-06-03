import React, { useEffect, useState } from 'react';
import RecipeCard from '../../shared/RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';

const LatestRecipe = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("recipes.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
    }, [])
    // text - [#FF5C67]
    return (
        <div>
            <h1 className='text-5xl font-bold 
            text-center my-10'> Latest Recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5'>
                {recipes.reverse().slice(0, 3).map((recipe) => <RecipeCard
                    key={recipe.id}
                    recipe={recipe}>
                </RecipeCard>)}
            </div>
            <div className='flex justify-center my-20'>
                <Link to="/all-recipes">
                    <button className='bg-[#FF5C67] rounded-lg shadow-md px-16 py-3 text-white font-bold'>See All Recipe</button>
                </Link>
            </div>
        </div>
    );
};

export default LatestRecipe;