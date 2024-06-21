import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateRecipe = () => {
    const recipe = useLoaderData()
    const { _id, title, image, description, time, type } = recipe
    const handelUpdateRecipe = (event) => {
        event.preventDefault();
        const title = event.target.title.value
        const image = event.target.image.value
        const time = event.target.time.value
        const type = event.target.type.value
        const description = event.target.description.value
        const updatedValue = { time, title, image, type, description }
        fetch(`https://recipe-easy-server.onrender.com/recipes/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("Access-Token")}`
            },
            body: JSON.stringify(updatedValue)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Data Updated")
                }
            })

    }
    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Update Recipe Info</h2>
            <form onSubmit={handelUpdateRecipe} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" defaultValue={title} className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Image URL</label>
                        <input name='image' type="text" defaultValue={image} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6 justify-around mt-6'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Time</label>
                        <input name='time' type="text" defaultValue={time} className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Type</label>
                        <select name='type' className="select select-bordered w-full max-w-xs">
                            <option value={type} selected>{type}</option>
                            <option value="French">French</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Italian">Italian</option>
                            <option value="Thai">Thai</option>
                            <option value="Mexican">Mexican</option>
                        </select>
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Description</label>
                        <textarea name='description' type="text" defaultValue={description} className="textarea textarea-bordered w-full h-36"></textarea>
                    </div>
                </div>
                <div className='px-8'>
                    <button className='w-full btn btn-info text-white my-4'>Update Recipe</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateRecipe;