import React from 'react';

const Products = ({ product, setBooking }) => {
    const { img, description, mobile, postTime, productName, productCondition, purchasePrice, resellPrice, sellerNmae, yearOfPurchase, yearOfUse } = product
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                <figure className='w-[40vw] p-8 sm:mx-auto'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  {productName}</h2>
                    <p className='text-slate-500'>{description}</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                        <p className='text-red-400'><span >Purchase Year: </span> {yearOfPurchase}</p>
                        <p className='text-red-400'><span >Product Quality: </span> {productCondition}</p>
                        <p className='text-red-400'><span >Purchase Price: </span>${purchasePrice} </p>
                        <p className='text-red-400'><span >Resale Price: </span> ${resellPrice}</p>
                        <p className='text-red-400'><span >Seller: </span> {sellerNmae} </p>
                        <p className='text-red-400'><span >Contact: </span> {mobile}</p>
                        <p className='text-red-400'><span >Post Time: </span> {postTime}</p>
                        <p className='text-red-400'> <span >Used: </span> {yearOfUse}</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    <div className='flex justify-end'>

                        <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="btn btn-primary text-white">Booking Now</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;