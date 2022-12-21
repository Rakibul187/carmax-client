import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../Components/Loader';

const AllUsers = () => {

    const url = "https://carmax-server-alpha.vercel.app/users"

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            fetch(url)
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    const handleProductDelete = (name, id) => {
        fetch(`https://carmax-server-alpha.vercel.app/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} deleted succesfully.`)
                    refetch()
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='p-10' >
            {
                data?.length &&
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-5">Here is all Buyers</h3>
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
                                    data.map((user, i) => <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role}</td>
                                        <td><button onClick={() => handleProductDelete(user?.name, user?._id)} className='btn btn-primary text-white btn-xs'>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div >
    );
};

export default AllUsers;