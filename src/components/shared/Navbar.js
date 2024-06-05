import React, { useContext, useState } from 'react';
import "./Navbar.css"
import logo from '../../assets/logo/large_recipeeasy.png';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/Authprovider';

const Navbar = () => {
    let arr = [true, false, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");
    const { user, logout } = useContext(authContext)
    console.log(user)
    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }
    return (
        <div className="2xl:container 2xl:mx-auto z-40 relative">
            <div className="bg-white rounded shadow-lg py-2 px-7 absolute top-0 left-0 right-0">
                <nav className="flex justify-between">
                    <div className=" space-x-3 lg:pr-16 pr-6">
                        <img src={logo} alt='logo' className='w-28 '></img>
                    </div>
                    <div>
                        <ul className="hidden md:flex flex-auto space-x-2">
                            <Link to="/"><li onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Home</li></Link>

                            <Link to="/about"><li onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>About</li></Link>
                            <Link to="/all-recipes"><li onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>Recipes</li></Link>
                            <Link to="/blog"><li onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>Blog</li></Link>
                            <Link to="/contact"><li onClick={() => selected(4)} className={`${style[4] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>Contact</li></Link>
                            {
                                user?.uid ?
                                    <>
                                        <Link to="/dashboard"><li onClick={() => selected(5)} className={`${style[5] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>Dashboard</li></Link>
                                        <button onClick={logout}>
                                            <li onClick={() => selected(0)} className={`${style[6] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>Log Out</li>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link to="/login"><li onClick={() => selected(6)} className={`${style[6] ? 'text-white bg-red-400 600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded h-8`}>Login</li></Link>
                                    </>
                            }
                        </ul>
                    </div>
                    <div className="avatar-container flex space-x-5 justify-center items-center pl-2 relative ">
                        <div className="avatar">
                            {/* photoURL */}
                            <div className={`w-10 rounded-full  ring-offset-base-100 ring-offset-2 ${user && "ring ring-red-400"}`}>
                                {user?.uid ?
                                    user.photoURL ?

                                        <Link to="/dashboard/profile">
                                            <img src={user.photoURL} alt='profile_image' />
                                        </Link>
                                        :
                                        <Link to="/dashboard/profile">
                                            <img src="https://i.ibb.co/4F2wVHm/blank-image.jpg" alt='profile_image' />
                                        </Link>

                                    :
                                    // <img src="https://i.ibb.co/4F2wVHm/blank-image.jpg" alt='profile_image' />
                                    <></>
                                }
                            </div>
                        </div>
                        {
                            user?.uid &&

                            <ul className='dropdown-item absolute  z-[40] bg-slate-50 border-2 border-white outline-none rounded-md top-[50px] left-[-20px] '>
                                <button className='w-full rounded btn-xs text-center text-white bg-black'> <li>Profile</li></button>
                            </ul>
                        }

                    </div>
                </nav>
                {/* for smaller devcies */}
                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-red-400 600 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length !== 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span>
                            <Link to="/">
                                <p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Home"}</p>
                            </Link>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                            <Link to="/"><li onClick={() => setSelectedText("Home")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Home</li></Link>
                            <Link to="/about"><li onClick={() => setSelectedText("About")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">About</li></Link>
                            <Link to="/all-recipes"><li onClick={() => setSelectedText("Recipes")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Recipes</li></Link>
                            <Link to="/blog"><li onClick={() => setSelectedText("Blog")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Blog</li></Link>
                            <Link to="/contact"><li onClick={() => setSelectedText("Contact")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Contact</li></Link>
                            {/*  */}
                            {
                                user?.uid ?
                                    <>
                                        <Link to="/dashboard"><li onClick={() => setSelectedText("dashboard")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Dashboard</li></Link>
                                        <button onClick={logout}>
                                            <li onClick={() => setSelectedText("Home")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Log Out</li>
                                        </button>
                                    </>
                                    :
                                    <Link to="/login"><li onClick={() => setSelectedText("Login")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Login</li></Link>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;