import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            {
                bookings?.length ?
                    <div>
                        <h3 className="text-3xl mb-5">My Bookings</h3>
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
                                            <td><button className='btn btn-xs btn-primary'>Pay</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <p className='text-3xl font-semibold'>You dont have any bookings yet!</p>
            }
        </div>
    );
};

export default MyBooking;