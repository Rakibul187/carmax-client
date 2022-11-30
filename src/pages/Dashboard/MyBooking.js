import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext)

    const url = `https://carmax-server-alpha.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(bookings)

    return (
        <div>
            {
                bookings?.length ?
                    <div>
                        <h3 className="text-2xl mt-8 font-semibold text-red-400 mb-5">Your Ordered Products</h3>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Meeting Location</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings?.map((booking, i) => <tr key={booking._id}>
                                            <th>{i + 1}</th>
                                            <td> <div className="w-24 mask mask-squircle">
                                                <img src={booking.img} alt='' />
                                            </div></td>
                                            <td>{booking.buyerName}</td>
                                            <td>{booking.productName}</td>
                                            <td>${booking.resellPrice}</td>
                                            <td>{booking.meetingLocation}</td>
                                            <td>
                                                {
                                                    booking.resellPrice && !booking.paid &&
                                                    <Link to={`/dashboard/payment/${booking?._id}`}><button className='btn btn-xs btn-primary text-white'>Pay</button></Link>
                                                }
                                                {
                                                    booking.resellPrice && booking.paid &&
                                                    <p className='text-primary'>Paid</p>
                                                }
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <p className='text-2xl font-semibold mt-10 text-red-400'>You dont have any booking product</p>

            }
        </div>
    );
};

export default MyBooking;