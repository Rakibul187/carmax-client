import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../Components/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import MyProduct from '../Products/CategoriesProducts/MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`https://carmax-server-alpha.vercel.app/dashboard/myproducts?name=${user.displayName}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }
    // console.log(products)

    return (
        <div>
            {
                products?.length ?
                    <div className='grid grid-cols-1 gap-5 p-10'>
                        <p className='text-2xl text-primary font-semibold mt-3 mb-2'>My Products</p>
                        {
                            products &&
                            products.map(product => <MyProduct
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            ></MyProduct>)
                        }
                    </div>
                    :
                    <p className='text-2xl text-primary font-semibold mt-3 mb-2'>You don't have any products yet!</p>
            }
        </div>
    );
};

export default MyProducts;