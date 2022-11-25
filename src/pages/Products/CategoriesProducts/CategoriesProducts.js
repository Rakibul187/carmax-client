import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoriesProducts = () => {
    const products = useLoaderData()
    return (
        <div className=' max-w-[1200px] mx-auto mt-10'>
            <p>Products :  {products.length}</p>
        </div>
    );
};

export default CategoriesProducts;