import React from 'react';

const JoinAsChef = () => {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-16 mt-20">
            <div className=" w-full  relative flex items-center justify-center">
                <img src="https://i.ibb.co/VMRCsD0/group-happy-chefs.jpg" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="https://i.ibb.co/hYkhHgK/lifestyle-people-learning-make-sushi.jpg" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://i.ibb.co/VMRCsD0/group-happy-chefs.jpg" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">Join As Chef</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Could be a rallying cry for aspiring chefs, encouraging them to enter the culinary profession. It might also be a program or service for people to sign up and become chefs, perhaps through training or job placement. Depending on the context, it could be a call to action for home cooks to share their skills by joining a platform like a community kitchen or meal delivery service.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinAsChef;