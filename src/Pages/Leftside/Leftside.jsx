import React from 'react';

const Leftside = ({ places }) => {
    const { image, name, description } = places;
    return (
        <>
            <div className='text-white text-left'>
                <h2 className='text-7xl font-semibold my-6'>{name}</h2>
                <p className='text-xl font-thin my-6'>{description}</p>
                <button className='bg-orange-400 py-3 px-7 rounded-md font-bold mt-auto'>Book Now</button>
            </div>

        </>
    );
};

export default Leftside;