import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const RecipeDetails = () => {
    const location = useLocation()
    const { title, image, description, time, type } = useLoaderData()
    return (
        <div className='pt-32 md:pt-20'>
            <div className="card w-full md:w-7/12 px-2 mx-auto glass my-6">
                <figure><img src={image} className='w-full md:w-3/4 mt-5' alt="Recipe_Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="card-subtitle font-medium">Cooked Time : {time}</h3>
                    <h3 className="card-subtitle font-medium">Type : {type}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <Link to={`${location.state ? location.state : "/"}`}>
                <button className="ms-72 rounded mt-6 border border-solid border-lime-600 px-6 py-3">Back</button>
            </Link>
        </div>
    );
};

export default RecipeDetails;