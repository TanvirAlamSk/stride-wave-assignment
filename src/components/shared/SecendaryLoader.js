import React from 'react';

const SecendaryLoader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center text-warning'>
            <span className="loading loading-infinity loading-lg"></span>
            <p className='ms-4'>Please Wait</p>
        </div>
    );
};

export default SecendaryLoader;