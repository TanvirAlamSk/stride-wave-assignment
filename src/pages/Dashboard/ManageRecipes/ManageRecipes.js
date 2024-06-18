import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ManageProductCard from '../../../components/dashboard/ManageProductCard';

const ManageRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("https://stride-wave-assignment-server.vercel.app/recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
    }, [])

    const handelDeleteRecipe = (id) => {
        fetch(`https://stride-wave-assignment-server.vercel.app/recipes/${id}`, {
            method: "DELETE",
            headers: {
                "authorization": `bearer ${localStorage.getItem("recipe-easy-token")}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                const restRecipes = recipes.filter((recipe) => recipe._id !== id)
                setRecipes(restRecipes)
            })
    }


    return (
        <div className="w-3/4 mx-auto mt-12">
            <h3 className="text-2xl text-center">Manage All Product</h3>
            <div >
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipes.map((recipe, index) => <ManageProductCard
                                    key={recipe._id}
                                    recipe={recipe}
                                    index={index}
                                    handelDeleteRecipe={handelDeleteRecipe}
                                ></ManageProductCard>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageRecipes;