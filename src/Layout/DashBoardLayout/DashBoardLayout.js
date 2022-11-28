import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../pages/Contexts/AuthProvider/AuthProvider';
// import useAdmin from '../../../hooks/useAdmin';
import Navbar from '../../pages/shared/Navbar/Navbar';
// import Navbar from '../../../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState('')


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/users`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        data.map(user => {
                            if (user.role === "Seller") {
                                return setRole(user.role)
                            }
                            else if (user.role === "Buyer") {
                                return setRole(user.role)
                            }
                            else if (user.role === "admin") {
                                return setRole(user.role)
                            }
                            return setRole(user.role)
                        })
                    }
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
                        {/* {
                            user?.uid &&
                            <>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            </>
                        } */}


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
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            </>
                        }
                        {
                            role === "admin" &&
                            <>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
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