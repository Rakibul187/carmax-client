import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const users = useLoaderData()
    // console.log(users)
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, i) => <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
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