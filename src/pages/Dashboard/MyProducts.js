import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import MyProduct from '../Products/CategoriesProducts/MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [products, setProdutct] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/dashboard/myproducts?name=${user.displayName}`)
                .then(res => res.json())
                .then(data => setProdutct(data))
        }
    }, [user])

    console.log(products)

    return (
        <div className='grid grid-cols-1 gap-5 p-10'>
            <p className='text-3xl font-semibold mt-3 mb-2'>My Products</p>
            {
                products &&
                products.map(product => <MyProduct
                    key={product._id}
                    product={product}
                ></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;