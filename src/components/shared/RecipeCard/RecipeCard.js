import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { image, title, description, equipment } = recipe

    return (
        <div className="card bg-base-100 shadow-xl border-2 px-5">
            <figure className='rounded-lg mt-5'><img className=''
                src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions mt-5">
                    <button className="btn btn-info text-white w-full">
                        View Details</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;