import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { ProductAdd } from '../../../Hooks/ProductAdd';
import './AddProducts.css';


const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const date = new Date();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })
    const addProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=c7dc20a1cddfbaca42a43629f694835d'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const product = {
                    title: data.title,
                    sellerName: data.sellerName,
                    originalPrice: data.originalPrice,
                    resalePrice: data.resalePrice,
                    phoneNumber: data.phoneNumber,
                    location: data.location,
                    publishTime: data.publishTime,
                    yearOfUse: data.yearOfUse,
                    YearOfPurchase: data.YearOfPurchase,
                    description: data.description,
                    conditionType: data.conditionType,
                    categoryId: data.categoryId,
                    image: imageData.data.url,
                };
                console.log(product.categoryId)
                ProductAdd(product)
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add Product</h2>
            <form onSubmit={handleSubmit(addProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Title</span></label>
                    <input type="text" {...register("title", {
                        required: "Title is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("sellerName", {
                        required: "sellerName is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="number" {...register("originalPrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resalePrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Number</span></label>
                    <input type="number" {...register("phoneNumber", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Publish Time</span></label>
                    <input type="time" {...register("publishTime", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.publishTime && <p className='text-red-500'>{errors.publishTime.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of use</span></label>
                    <input type="number" {...register("yearOfUse", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of Purchase</span></label>
                    <input type="date" {...register("YearOfPurchase", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.YearOfPurchase && <p className='text-red-500'>{errors.YearOfPurchase.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea className="textarea w-full max-w-xs textarea-bordered" {...register("description", {
                        required: true
                    })} placeholder="Description"></textarea>
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

                <div className='form-control w-full max-w-xs'>
                    <label className="label"> <span className="label-text">Condition Type</span></label>
                    <select className='w-full border py-2 max-w-xs mt-3 rounded-xl' {...register("conditionType", { required: true })}>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="excellent">excellent</option>
                        {errors.conditionType && <p className='text-red-500'>{errors.conditionType.message}</p>}
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('categoryId')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category._id}
                            >{category.brand}</option>)
                        }


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <button className='btn bg text-white w-full mt-4' type="submit">add Products</button>
            </form>
        </div>
    );
};


export default AddProducts;