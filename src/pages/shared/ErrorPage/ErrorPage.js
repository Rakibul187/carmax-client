import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import errorimg from '../../../assets/errorimg/error5.webp'
const ErrorPage = () => {
    const error = useRouteError()
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(e => console.error(e))
    }

    return (
        <div className='w-[100vw] h-[100vh] gap-2 flex flex-col justify-center items-center' id="error-page">
            <img className='rounded-full' src={errorimg} alt="" />
            <p className='text-red-600 text-3xl font-bold' >
                <i>Page {error.statusText || error.message}!</i>
            </p>
            <p className='text-5xl font-bold'>Please  <Link to='/login'><button onClick={handleLogout} className='btn btn-warning mx-4 px-4'>LogOut</button> </Link> & Login</p>
        </div>
    );
};

export default ErrorPage;