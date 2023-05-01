import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Slider = () => {
    const places = useLoaderData();
    const { id } = useParams()
    const { image } = places;
    console.log(places, id);
    return (

        <div className='h-screen bg-gray-500 bg-blend-multiply' style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            <div className="carousel w-full">

                <div id={`${id}`} className="carousel-item w-full flex flex-col">

                    <div className='w-full'>
                        <Header></Header>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <Link to={`/places/1`} className="btn btn-xs">1</Link>
                        <Link to={`/places/2`} className="btn btn-xs">1</Link>
                        <Link to={`/places/3`} className="btn btn-xs">1</Link>
                        <Link to={`/places/4`} className="btn btn-xs">1</Link>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Slider;