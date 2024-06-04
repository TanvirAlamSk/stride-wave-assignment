import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { image, title, description, _id } = recipe
    const location = useLocation()

    return (
        <div className="card bg-base-100 shadow-xl border-2 px-5 h-[520px]">
            <figure className='rounded-lg mt-5'><img className=''
                src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions mt-5">
                    <Link state={location.pathname} to={`/recipes-details/${_id}`} >
                        <button className="btn btn-info text-white w-full">
                            View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;