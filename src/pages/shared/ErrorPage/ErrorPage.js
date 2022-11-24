import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

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
        <div className='w-full h-[100vh] gap-2 flex flex-col justify-center items-center' id="error-page">
            <h1 className='text-red-300 text-3xl'>Oops!</h1>
            <p className='text-red-400'>Sorry, an unexpected error has occurred.</p>
            <p className='text-red-600' >
                <i>{error.statusText || error.message}</i>
            </p>
            <p>Please  <Link to='/login'><button onClick={handleLogout} className='btn btn-warning mx-4 px-4'>LogOut</button> </Link> & Login</p>
        </div>
    );
};

export default ErrorPage;