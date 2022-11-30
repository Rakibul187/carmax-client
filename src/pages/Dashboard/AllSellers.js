import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../Components/Loader';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch("https://carmax-server-alpha.vercel.app/users/seller?role=Seller")
            const data = await res.json()
            return data
        }
    })

    const handleDeleteSeller = seller => {
        const process = window.confirm(`Are you sure? you want to delete ${seller.name}`)
        if (process) {
            fetch(`https://carmax-server-alpha.vercel.app/users/seller/${seller._id}`, {
                method: "DELETE"
            })
                .then(res => res.json()
                    .then(data => {
                        refetch()
                    }))
        }
    }

    const handleUpdateSeller = seller => {
        console.log(seller)
        if (seller) {
            fetch(`https://carmax-server-alpha.vercel.app/users/seller/verification/${seller._id}`, {
                method: "PUT"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        toast.success(`${seller.name}Verified Successfully.`)
                        refetch()
                    }
                })
        }
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='ml-10 mt-10'>
            <div>
                {
                    sellers &&
                    <div>
                        <h3 className="text-2xl font-semibold text-red-400 mb-5">Here is all Sellers</h3>
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
                                            <td>
                                                <button onClick={() => handleUpdateSeller(seller)} className='btn btn-primary text-white btn-xs'>
                                                    {
                                                        seller.isVerified ?
                                                            <>Verified</>
                                                            :
                                                            <>unverified</>
                                                    }
                                                </button>
                                            </td>
                                            <td><button onClick={() => handleDeleteSeller(seller)} className='btn btn-delete btn-xs'>Delete</button></td>
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