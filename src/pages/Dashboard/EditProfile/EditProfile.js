import React, { useContext } from 'react';
import { authContext } from '../../../context/Authprovider';
import useName from '../../../utilities/useName';
import toast from 'react-hot-toast';

const EditProfile = () => {
    const { user, userUpdate, userEmailUpdate, userPasswordUpdate } = useContext(authContext)
    const name = useName()
    const handelChangeName = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        
        userUpdate({ displayName: name })
            .then(() => {
                fetch(`https://recipe-easy-server.onrender.com/users?email=${user?.email}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ name })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.modifiedCount) {
                            toast.success("Name Updated Successfully")
                        }
                       
                    })
            })
        .catch((error)=>alert(error))
    }
    // const handelChangeEmail = (event) => {
    //     event.preventDefault()
    //     const newEmail = event.target.email.value
    //     userEmailUpdate(newEmail)
    //         .then(() => {
    //             fetch(`https://recipe-easy-server.onrender.com/users?email=${user?.email}`, {
    //                 method: "PATCH",
    //                 headers: {
    //                     "content-type": "application/json"
    //                 },
    //                 body: JSON.stringify({ email: newEmail })
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     toast.success("Check your Email to verify Email Updated")
    //                     if (data.modifiedCount) {
    //                     }

    //                 })
    //          })
    //     .catch((error)=>alert(error))
        
    // }
    const handelChangeObjective = (event) => {
        event.preventDefault()
        const objective = event.target.objective.value
        fetch(`https://recipe-easy-server.onrender.com/users?email=${user?.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ objective })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success(" Your is objective Update")
                }

            })

    }
    const handelChangePassword = (event) => {
        event.preventDefault()
        const password = event.target.password.value
        userPasswordUpdate(password)
            .then(() => {
            toast.success("password SuccessFully")
            }).catch((error) => alert(error))
    }

    return (
        <div className="hero mt-2">
            <div className="hero-content flex-col lg:flex-row-reverse w-full md:w-2/3 lg:w-2/5">
                <div className="card shrink-0 w-full shadow-2xl ">
                    <form onSubmit={handelChangeName} className="card-body w-full pt-5 py-0 mt-3">
                        <div className='flex flex-col justify-start items-start border p-3 w-full'>
                            <label className="form-control">Name</label>
                            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full inline-block" />
                            <button className='btn btn-sm text-white font-medium btn-success mt-2 w-full'>Click</button>
                        </div>
                    </form>
                    {/* <form onSubmit={handelChangeEmail} className="card-body py-0 mt-3">
                        <div className='flex flex-col  justify-start items-start border p-3'>
                            <label className="form-control">Email</label>
                            <input type="text" name="email" defaultValue={user.email} className="input input-bordered w-full inline-block" />
                            <button className='btn btn-sm text-white font-medium btn-success mt-2 w-full '>Click</button>
                        </div>
                    </form> */}
                    <form onSubmit={handelChangeObjective} className="card-body py-0 mt-3">
                        <div className='flex flex-col justify-start items-start border p-3'>
                            <label className="form-control">Objective</label>
                            <textarea type="text" name='objective' className="input input-bordered w-full inline-block" />
                            <button className='btn btn-sm text-white font-medium btn-success mt-2 w-full '>Click</button>
                        </div>
                    </form>
                    <form onSubmit={handelChangePassword} className="card-body py-0 mt-3">
                        <div className='flex flex-col  justify-start items-start border p-3'>
                            <label className="form-control">Password</label>
                            <input type="text" name="password" className="input input-bordered w-full inline-block" />
                            <button className='btn btn-sm text-white font-medium btn-success mt-2 w-full '>Click</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;


// <div className='w-full px-2 md:w-2/5 mx-auto bg-slate-404'>
        //     <div className='grid grid-cols-1 gap-5 justify-center'>
        //         <form>
        //             <div className='flex flex-col  justify-start items-start border p-3'>
        //                 <label className="form-control">Name</label>
        //                 <input type="text" defaultValue={name} className="input input-bordered w-full inline-block" />
        //                 <button className='btn btn-sm text-white font-medium btn-success mt-2 w-full '>Click</button>
        //             </div>
        //         </form>
        //         <form>
        //             <div className='flex flex-col justify-start 
        //              items-start border p-3'>
        //                 <label className="form-control">Email</label>
        //                 <input type="text" defaultValue={user?.email} className="input input-bordered w-full  inline-block" />
        //                 <button className='btn btn-sm text-white font-medium btn-error mt-2 w-full'>Click</button>
        //             </div>
        //         </form>
        //         <form>
        //             <div className='flex flex-col justify-start 
        //              items-start border p-3'>
        //                 <label className="form-control">Objective</label>
        //                 <textarea type="text" placeholder="Type here" className="input input-bordered w-full  inline-block" />
        //                 <button className='btn btn-sm text-white font-medium btn-success mt-2 w-full'>Click</button>
        //             </div>
        //         </form>
        //         <form onSubmit={handelChangePassword} className="card-body">
        //             <div className='flex flex-col justify-start 
        //              items-start border p-3'>
        //                 <label className="form-control">Password</label>
        //                 <input type="text" name='password' placeholder="Type here" className="input input-bordered w-full  inline-block" />
        //                 <button type='submit' className='btn btn-sm text-white font-medium btn-error mt-2 w-full'>Click</button>
        //             </div>
        //         </form>

        //     </div>
        //     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //         <form className="card-body">
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Email</span>
        //                 </label>
        //                 <input type="text" placeholder="email" className="input input-bordered" />
        //             </div>
        //             <div className="form-control mt-6">
        //                 <button className="btn btn-primary">Login</button>
        //             </div>
        //         </form>
        //     </div>
        // </div >