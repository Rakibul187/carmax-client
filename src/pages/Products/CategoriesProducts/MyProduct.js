import React from 'react';
import toast from 'react-hot-toast';

const MyProduct = ({ product, refetch }) => {
    // console.log(product)
    const { image, description, mobile, postTime, productName, productCondition, purchasePrice, resellPrice, sellerNmae, yearOfPurchase, yearOfUse, _id } = product

    console.log(product)
    const handleProductDelete = id => {
        fetch(`https://carmax-server-alpha.vercel.app/product/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${productName} deleted succesfully.`)
                    refetch()
                }
            })
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                <figure className='w-[40vw] p-8 sm:mx-auto'><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  {productName}</h2>
                    <p className='text-slate-500'>{description}</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                        <p className='text-primary'><span >Purchase Year: </span> {yearOfPurchase}</p>
                        <p className='text-primary'><span >Product Quality: </span> {productCondition}</p>
                        <p className='text-primary'><span >Purchase Price: </span>${purchasePrice} </p>
                        <p className='text-primary'><span >Resale Price: </span> ${resellPrice}</p>
                        <p className='text-primary'><span >Seller: </span> {sellerNmae} </p>
                        <p className='text-primary'><span >Contact: </span> {mobile}</p>
                        <p className='text-primary'><span >Post Time: </span> {postTime}</p>
                        <p className='text-primary'> <span >Used: </span> {yearOfUse}</p>
                        <p className='text-primary'> status: unsold </p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    <div className='flex justify-end'>

                        <button className="btn btn-primary text-white">Advertise</button>
                        <button onClick={() => handleProductDelete(_id)} className="btn btn-dark ml-4 px-8">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProduct;