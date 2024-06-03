import React from 'react';
import { Slide } from "pure-react-carousel";
import { Link } from 'react-router-dom';


const TeamsCard = ({ index, chef }) => {
    const { name, image, speciality } = chef
    return (
        <Slide index={index} className=''>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={image} alt="black chair and white table" className="object-cover object-center w-full h-[600px]" />
                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <div className="flex h-full items-end pb-6">
                        <div>
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{name}</h3>
                            <h4 className="text-lg lg:text-xl font-semibold 
                            leading-5 lg:leading-6 text-white">{speciality}</h4>
                            <Link className='font-bold text-white bg-black p-0 '>View Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default TeamsCard;