import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="bg-light border-gray-200 dark:bg-gray-900 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
                    <Link to='/' className="flex items-center">
                        {/* <img src={logo} className="w-20 mr-3" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl whitespace-nowrap dark:text-white
                         text-primary font-extrabold">CarMax</span>
                    </Link>
                    <div className="flex items-center">
                        <p className="text-md 
                        font-medium text-blue-600 dark:text-blue-500"><Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </nav>
            <nav className=" dark:bg-gray-700 ">
                <p className=' border-green-900 border-t px-10 max-w-screen-xl mx-auto'></p>
                <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li className='hover:text-primary'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='hover:text-primary'>
                                <Link to="/">Dashboard</Link>
                            </li>
                            <li className='hover:text-primary'>
                                <Link to="/">Admin</Link>
                            </li>
                            <li className='hover:text-primary'>
                                <Link to="/">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;