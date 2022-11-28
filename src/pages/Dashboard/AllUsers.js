import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const users = useLoaderData()
    const [loading, setLoading] = useState(false)
    // console.log(users)
    const handleProductDelete = (name, id) => {
        setLoading(true)
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${name} deleted succesfully.`)
                    // refetch()
                    setLoading(false)
                }
            })
    }
    if (loading) {
        return <p>Loading</p>
    }

    return (
        <div className='p-10'>
            {
                users?.length &&
                <div>
                    <h3 className="text-3xl mb-5">All Users</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, i) => <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td><button onClick={() => handleProductDelete(user?.name, user?._id)} className='btn btn-primary btn-xs'>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default AllUsers;