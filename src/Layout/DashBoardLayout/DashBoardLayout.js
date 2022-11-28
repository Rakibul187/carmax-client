import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../pages/Contexts/AuthProvider/AuthProvider';
import Navbar from '../../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState('')

    useEffect(() => {
        if (user) {
            fetch(`https://carmax-server-alpha.vercel.app/users/role?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.role)
                    if (data.role) {
                        return setRole(data.role)
                    }
                    return setRole("Buyer")
                })
        }
    }, [user])


    console.log(role)
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
                            role === "Seller" &&
                            <>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>

                        }

                        {
                            role === "Buyer" &&
                            <>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>
                            </>
                        }
                        {
                            role === "admin" &&
                            <>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>
                                <li><Link to="/dashboard/allusers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;