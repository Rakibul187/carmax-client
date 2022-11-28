import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/users/seller?role=Seller")
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])


    return (
        <div>

            <div>
                {
                    sellers &&
                    <div>
                        <h3 className="text-3xl font-bold mb-5">Here is all Sellers</h3>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Verify</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sellers?.map((seller, i) => <tr key={seller._id}>
                                            <th>{i + 1}</th>
                                            <td>{seller.name}</td>
                                            <td>{seller.email}</td>
                                            <td><button className='btn btn-info btn-xs'>unverified</button></td>
                                            <td><button className='btn btn-delete btn-xs'>Delete</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllSellers;