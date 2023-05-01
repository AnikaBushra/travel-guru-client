import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RightSide = () => {
    const [places, setPlaces] = useState({})
    useEffect(() => {
        fetch('https://travel-guru-server-anikabushra.vercel.app/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    console.log(places.travelData);
    return (
        <div className='grid grid-cols-3 gap-4'>

            {
                places?.travelData?.slice(0, 3).map(place => (
                    <div key={place.id} className="card w-full h-80  shadow-xl image-full m-2 border-orange-500 hover:border-4">
                        <figure><img src={place.image} alt="places" className="z-50" />
                        </figure>

                        <div className="card-body mb-auto">
                            <h2 className='text-white '>{place.name}</h2>


                        </div>
                    </div>
                )
                )
            }
        </div >
    );
};

export default RightSide;