import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Leftside from '../Leftside/Leftside';
import RightSide from '../RightSide/RightSide';

const Slider = () => {
    const places = useLoaderData();
    const { id } = useParams()
    const { image, name, description } = places;
    console.log(places, id);
    return (

        <div className='h-full bg-gray-500 bg-blend-multiply px-14' style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {/* --------slider ------- */}
            <div className="carousel w-full">
                <div id={`${id}`} className="carousel-item w-full flex flex-col">
                    {/*----- header ------- */}
                    <div className='w-full'>
                        <Header></Header>
                    </div>
                    <div className="text-center flex flex-col py-20">
                        <div className="grid grid-cols-2 pe-3">
                            <Leftside places={places}></Leftside>
                            <RightSide></RightSide>
                        </div>
                        <div className='mt-20'>
                            <Link to={`/places/1`} className="btn btn-xs">1</Link>
                            <Link to={`/places/2`} className="btn btn-xs">1</Link>
                            <Link to={`/places/3`} className="btn btn-xs">1</Link>
                            <Link to={`/places/4`} className="btn btn-xs">1</Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Slider;