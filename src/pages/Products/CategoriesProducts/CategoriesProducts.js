import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Products from './Products';

const CategoriesProducts = () => {
    const products = useLoaderData()
    const [booking, setBooking] = useState(null)

    return (
        <div className=' max-w-[1200px] mx-auto mt-10'>
            <p className='text-3xl mb-5 text-primary font-semibold'>Here is all  {products[0].Category} Collection</p>
            <div>
                {
                    products?.map(product =>
                        <Products
                            key={product._id}
                            product={product}
                            setBooking={setBooking}
                        ></Products>)
                }
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoriesProducts;