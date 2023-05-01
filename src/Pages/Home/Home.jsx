import React from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Home = () => {
    // https://travel-guru-server-anikabushra.vercel.app/places
    return (
        <div>

            <Outlet></Outlet>
            {/* <Slider></Slider> */}
        </div>
    );
};

export default Home;