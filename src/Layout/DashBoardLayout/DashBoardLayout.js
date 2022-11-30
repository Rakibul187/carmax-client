import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import { AuthContext } from '../../pages/Contexts/AuthProvider/AuthProvider';
import Navbar from '../../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    console.log('admin', isAdmin, 'seller', isSeller)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-12 ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 max-h-[100vh] w-60 text-md font-semibold pl-12 bg-slate-100 text-base-content">
                        <li><Link to="/dashboard/bookings">My Orders</Link></li>
                        <div>
                            {
                                isSeller &&
                                <>
                                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                    <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                </>
                            }
                        </div>
                        <div>
                            {
                                isAdmin &&
                                <>
                                    <li><Link to="/dashboard/allusers">All Buyers</Link></li>
                                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                </>
                            }
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;