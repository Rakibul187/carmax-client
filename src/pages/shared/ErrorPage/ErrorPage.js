import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import errorimg from '../../../assets/errorimg/error3.webp'
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
        <div style={{
            background: `url(${errorimg})`, backgroundRepeat: "no-repeat"
        }}
            className='w-[100vw] h-[100vh] gap-2 flex flex-col justify-center items-center' id="error-page">
            <p className='text-red-600 text-3xl mt-28 font-bold' >
                <i>Page {error.statusText || error.message}!</i>
            </p>
            <p className='text-4xl font-bold'>Please  <Link to='/login'><button onClick={handleLogout} className='btn btn-warning mx-4 px-4'>LogOut</button> </Link> & Login</p>
        </div>
    );
};

export default ErrorPage;