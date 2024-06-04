import React from 'react';

const EditProfile = () => {
    return (
        <div className='w-5/6 mx-auto bg-slate-40 my-24'>
            <form>
                <div className='grid grid-cols-1 gap-5 justify-center'>
                    <div className='grid grid-cols-1 justify-center'>
                        <label className="form-control w-full max-w-xs">Name</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />

                    </div>
                    <div className='flex justify-center items-center'>
                        <label className="form-control">Email</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full md:w-60 lg:w-96 inline-block" />
                        <button>Click</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;