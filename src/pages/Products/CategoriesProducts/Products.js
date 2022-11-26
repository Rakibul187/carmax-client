import React from 'react';

const Products = ({ product, setBooking }) => {
    console.log(product)
    const { img, description, mobile, postTime, productName, productCondition, purchasePrice, resellPrice, sellerNmae, yearOfPurchase, yearOfUse } = product
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                <figure className='w-[40vw] p-8 sm:mx-auto'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  {productName}</h2>
                    <p className='text-slate-500'>{description}</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                        <p className='text-secondary'><span >Purchase Year: </span> {yearOfPurchase}</p>
                        <p className='text-secondary'><span >Product Quality: </span> {productCondition}</p>
                        <p className='text-secondary'><span >Purchase Price: </span>${purchasePrice} </p>
                        <p className='text-secondary'><span >Resale Price: </span> ${resellPrice}</p>
                        <p className='text-secondary'><span >Seller: </span> {sellerNmae} </p>
                        <p className='text-secondary'><span >Contact: </span> {mobile}</p>
                        <p className='text-secondary'><span >Post Time: </span> {postTime}</p>
                        <p className='text-secondary'> <span >Used: </span> {yearOfUse}</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    <div className='flex justify-end'>

                        <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="btn btn-primary">Booking Now</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;