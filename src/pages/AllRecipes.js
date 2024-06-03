import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/shared/RecipeCard/RecipeCard';

const AllRecipes = () => {
    const recipes = useLoaderData()
    return (
        <div className='pt-32 md:pt-10'>
            <h1 className='text-5xl font-bold 
            text-left my-10 ps-8'> All Recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5'>
                {
                    recipes.map((recipe) => <RecipeCard
                        key={recipe.id}
                        recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;