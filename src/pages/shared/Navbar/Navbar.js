import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaCar } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    const menuItems = <React.Fragment>
        <li className="mr-1 hover:text-blue-700 font-semibold"><Link to="/">Home</Link></li>
        <li className="mr-1 hover:text-blue-700 font-semibold"><Link to="/blogs">Blogs</Link></li>
        <li className="mr-1 hover:text-blue-700 font-semibold"><Link to="/contact">Contact</Link></li>

        {
            user?.uid ?
                <>
                    <li className="mr-1 hover:text-blue-700 font-semibold"><Link to="/dashboard">Dashboard</Link></li>
                    <button onClick={handleLogout} className='btn btn-ghost text-primary'>LogOut</button>
                </>
                :
                <>
                    <li className='text-primary text-lg font-bold hover:text-blue-800'><Link to="/login">Login</Link></li>
                </>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-slate-100 flex justify-between px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn  btn-ghost font-extrabold normal-case text-xl"><FaCar className='text-primary ml-2 text-bold'></FaCar> <span className='ml-2 capitalize' >  c a r m a x</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;