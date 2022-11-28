import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import MyProduct from '../Products/CategoriesProducts/MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/myproducts?name=${user.displayName}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <p>loading</p>
    }
    // console.log(products)

    return (
        <div className='grid grid-cols-1 gap-5 p-10'>
            <p className='text-3xl font-semibold mt-3 mb-2'>My Products</p>
            {
                products &&
                products.map(product => <MyProduct
                    key={product._id}
                    product={product}
                    refetch={refetch}
                ></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;