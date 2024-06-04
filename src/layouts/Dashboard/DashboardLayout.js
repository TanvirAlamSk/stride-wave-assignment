import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { IoIosArrowBack } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start">
                <label htmlFor="my-drawer-2" className="btn btn-error text-white text-3xl drawer-button lg:hidden mt-4 ms-2 rounded-3xl p-0 px-2"><MdDoubleArrow /></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
                    <div>
                        <li><Link to="/dashboard/manage-recipes"> Manage Recipes</Link></li>
                        <li><Link to="/dashboard/add-recipe">Add Recipe</Link></li>
                        <li><Link to="/dashboard/profile">Profile</Link></li>

                    </div>
                    <div>
                        <li className='text-[#FF4C58] font-semibold'><Link to="/">
                            <IoIosArrowBack></IoIosArrowBack>
                            Go To Home</Link></li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;