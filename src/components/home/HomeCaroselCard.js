import React from 'react';
import { LuHardHat } from "react-icons/lu";

const HomeCaroselCard = ({ banner }) => {
    return (
        <div id={`banner${banner.id}`} className="carousel-item relative w-full mt-28 md:mt-16">
            <img src={banner.image} className="w-full h-96 md:h-[700px]" alt='bannerImage' />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className=" flex absolute justify-between items-center transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
                <div className=' flex items-center justify-start w-full  float-left'>
                    <a href={`#${banner.prev}`} className="btn btn-circle float-start">❮</a>
                    <div className='mx-3 md:mx-10 lg:mx-20 w-full md:w-2/3'>
                        <h1 className='text-xl md:text-2xl lg:text-5xl text-white font-bold'>{banner.title}</h1>
                        <p className='text-sm md:text-md lg:text-lg text-white mt-4 hidden md:block'>{banner.subtitle}</p>
                        <span className='block'>
                            <button className='bg-white text-red-500 font-semibold mt-5 md:mt-20 px-2 md:px-6 py-2 rounded-3xl'>Explore Recipes
                                <LuHardHat className='inline ms-1 font-bold w-6'></LuHardHat>
                            </button>
                        </span>
                    </div>
                </div>
                <a href={`#${banner.next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default HomeCaroselCard;