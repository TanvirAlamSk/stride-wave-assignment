import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/shared/RecipeCard/RecipeCard';
import SecendaryLoader from '../components/shared/SecendaryLoader';

const AllRecipes = () => {
    const recipes = useLoaderData()
    const [allRecipe, setAllrecipe] = useState(recipes)
    const [recipeOnSearch, setRecipeOnSearch] = useState(recipes)

    const handelSearch = (event) => {
        event.preventDefault();
        const item = event.target.value
        const filterData = recipes.filter((recipe) => recipe.title.toLowerCase().includes(item.toLowerCase()))
        setAllrecipe(filterData)
    }

    return (
        <div>
            <div className='pt-32 md:pt-10'>
                <h1 className='text-5xl font-bold 
            text-left my-10 ps-8'> All Recipes</h1>
                <div className='flex flex-wrap gap-3 mb-10 ps-8'>
                    <label className="input input-bordered flex items-center gap-2 w-5/6 md:w-1/3 mx-auto">
                        <input onChange={handelSearch} type="text" name="search" className=" float-right inline-block w-full" placeholder="Search" />
                        <button type='submit' className='border-2 border-red-400 font-bold bg-red-400 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white font-bold opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                    </label>
                </div>
                <div className={`${recipes.length > 0 && "grid"} grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5`}>
                    {
                        allRecipe.length === 0 ?
                            <SecendaryLoader></SecendaryLoader>
                            :
                            allRecipe.map((recipe) => <RecipeCard
                                key={recipe.id}
                                recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRecipes;