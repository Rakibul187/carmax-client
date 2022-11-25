import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const CategoriesProducts = () => {
    const products = useLoaderData()
    return (
        <div className=' max-w-[1200px] mx-auto mt-10'>
            <p className='text-3xl mb-5 text-primary font-semibold'>Here is all  {products[0].Category} Collection</p>
            <div>
                {
                    products?.map(product =>
                        <Products
                            key={product._id}
                            product={product}
                        ></Products>)
                }
            </div>
        </div>
    );
};

export default CategoriesProducts;