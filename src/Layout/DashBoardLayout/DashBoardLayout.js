import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../pages/Contexts/AuthProvider/AuthProvider';
// import useAdmin from '../../../hooks/useAdmin';
import Navbar from '../../pages/shared/Navbar/Navbar';
// import Navbar from '../../../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email)
    // console.log(isAdmin)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            // isAdmin &&
                            user?.uid &&
                            <>
                                <li><Link to="/dashboard/bookings">My Booking</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;