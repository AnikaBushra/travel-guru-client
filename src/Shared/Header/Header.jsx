import React from 'react';
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <div className="navbar flex justify-between  py-5 text-white text-xl">
            <div className="">
                <div className="w-24 bg-slate-50 p-2 rounded">
                    <img src={logo} />
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search Your Destination" className="input input-bordered" />
                </div>
            </div>

            <Link to="/news">News</Link>
            <Link to="/destination">Destination</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <button className='bg-orange-400 py-3 px-7 rounded-md font-bold'><Link to="/login">Login</Link></button>
        </div>

    );
};

export default Header;