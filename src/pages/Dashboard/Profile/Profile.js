import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../context/Authprovider';
import useName from '../../../utilities/useName';

const Profile = () => {
    const { user } = useContext(authContext);
    const userName = useName();
    let firstLetter
    if (useName) {
        firstLetter = userName.slice(0, 1).toUpperCase()
    } else {
        firstLetter = "*"
    }

    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className="dark:text-white text-lg md:text-xl xl:text-2xl font-semibold text-gray-900 w-7/12">Name : {userName ? userName : " set your name"}</h1>
                            <p className='text-lg font-semibold '>Email : {user?.email}</p>
                            <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                        </div>
                    </div>

                    <div className="lg:w-3/12 mt-6 md:mt-8 lg:mt-0">
                        <div className="relative w-full h-full">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt="profile img" className="w-full h-full relative" />
                                    :
                                    <div className='h-72 w-64 bg-rose-400 flex justify-center items-center' title='please upload your photo'>
                                        <p className='text-white text-[275px] w-full text-center font-extrabold'>{firstLetter}</p>
                                    </div>

                            }
                            <div className="block absolute bottom-0 md:right-0 bg-red-200 w-2/3">
                                <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800  text-sm xl:text-base p-1 font-medium text-white flex justify-between w-full items-center rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                                    <Link to="/dashboard/edit-profile">Edit Profile</Link>
                                    <div>
                                        <svg className="fill-stroke dark:hover:text-gray-600" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 10.667L25.3333 16.0003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 lg:hidden">
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;