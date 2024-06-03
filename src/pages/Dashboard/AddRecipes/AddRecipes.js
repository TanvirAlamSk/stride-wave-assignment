import React from 'react';

const AddRecipes = () => {
    const handelAddRecipe = (event) => {
        event.preventDefault();
        const title = event.target.title.value
        const image = event.target.image.value
        const time = event.target.time.value
        const type = event.target.type.value
        const description = event.target.description.value
        console.log(time, title, image, type, description)

    }
    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Add A New Product</h2>
            <form onSubmit={handelAddRecipe} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" placeholder="title" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Image URL</label>
                        <input name='image' type="text" placeholder="image url" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6 justify-around mt-6'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Time</label>
                        <input name='time' type="text" placeholder="time" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Type</label>
                        <select name='type' className="select select-bordered w-full max-w-xs">
                            <option value="French" selected>French</option>
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
                        <textarea name='description' type="text" placeholder="description" className="textarea textarea-bordered w-full h-36"></textarea>
                    </div>

                </div>
                {/* {
                    shoesdata && <Modal> Click "Confirm" for add this product</Modal>
                } */}
            </form>
            <div className='px-8'>
                <button onClick={() => document.getElementById("update_modal").showModal()} className='w-full btn btn-info text-white my-4'>Add Product</button>
            </div>
        </div>
    );
};

export default AddRecipes;