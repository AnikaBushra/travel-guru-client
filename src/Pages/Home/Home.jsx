import React from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Home = () => {

    return (
        <div>

            <Outlet></Outlet>

        </div>
    );
};

export default Home;