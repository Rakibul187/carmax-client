import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { user } = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()

    const handleAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData)
                const product = {
                    productName: data.productName,
                    Category: data.category,
                    categoryId: "1",
                    sellerNmae: user.displayName,
                    purchasePrice: data.originalPrice,
                    resellPrice: data.resalePrice,
                    mobile: data.phoneNumber,
                    // postTime: data.publishTime,
                    postTime: new Date(),
                    location: data.location,
                    yearOfUse: data.yearOfUse + "years",
                    yearOfPurchase: data.YearOfPurchase,
                    description: data.description,
                    productCondition: data.conditionType,
                    image: imageData.data.url,
                };
                console.log(product)

                fetch('http://localhost:5000/addproduct', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            console.log(data)
                            toast.success("Product Upload Successfully.")
                            navigate('/dashboard/myproducts')
                        }
                    })
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl font-bold">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("productName", {
                        required: "Title is Required"
                    })} className="input input-bordered w-full" />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text ">Product Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        <option value='Sports Car'>Sports Car</option>
                        <option value='Crossover'>Crossover</option>
                        <option value='Convertible'>Convertible</option>
                    </select>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className="label"> <span className="label-text">Product Condition </span></label>
                    <select className='w-full border py-2 max-w-xs mt-3 rounded-xl' {...register("conditionType", { required: true })}>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="excellent">excellent</option>
                        {errors.conditionType && <p className='text-red-500'>{errors.conditionType.message}</p>}
                    </select>
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
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea className="textarea w-full max-w-xs textarea-bordered" {...register("description", {
                        required: true
                    })} placeholder="Description"></textarea>
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <button className='btn bg-primary text-white w-full mt-4' type="submit">add Products</button>
            </form>
        </div>
    );
};

export default AddProduct;