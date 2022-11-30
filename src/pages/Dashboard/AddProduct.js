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

                fetch('https://carmax-server-alpha.vercel.app/addproduct', {
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
        <div className=' p-7'>
            <h2 className="text-2xl font-semibold  text-red-400">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                    <div> <div className="form-control w-96">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productName", {
                            required: "Title is Required"
                        })} className="input input-bordered w-full" />
                        {errors.title && <p className='text-red-400'>{errors.title.message}</p>}
                    </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text ">Product Category</span></label>
                            <select
                                {...register('category')}
                                className="select input-bordered w-96">
                                <option value='Sports Car'>Sports Car</option>
                                <option value='Crossover'>Crossover</option>
                                <option value='Convertible'>Convertible</option>
                            </select>
                        </div>
                        <div className='form-control w-96'>
                            <label className="label"> <span className="label-text">Product Condition </span></label>
                            <select className='w-full border 96 mt-3 rounded-xl' {...register("conditionType", { required: true })}>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="excellent">excellent</option>
                                {errors.conditionType && <p className='text-red-400'>{errors.conditionType.message}</p>}
                            </select>
                        </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Original Price</span></label>
                            <input type="number" {...register("originalPrice", {
                                required: true
                            })} className="input input-bordered w-96" />
                            {errors.originalPrice && <p className='text-red-400'>{errors.originalPrice.message}</p>}
                        </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Resale Price</span></label>
                            <input type="number" {...register("resalePrice", {
                                required: true
                            })} className="input input-bordered w-96" />
                            {errors.resalePrice && <p className='text-red-400'>{errors.resalePrice.message}</p>}
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="number" {...register("phoneNumber", {
                                required: true
                            })} className="input input-bordered w-96" />
                            {errors.phoneNumber && <p className='text-red-400'>{errors.phoneNumber.message}</p>}
                        </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("location", {
                                required: true
                            })} className="input input-bordered w-96" />
                            {errors.location && <p className='text-red-400'>{errors.location.message}</p>}
                        </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Year of use</span></label>
                            <input type="number" {...register("yearOfUse", {
                                required: true
                            })} className="input input-bordered w-96" />
                            {errors.yearOfUse && <p className='text-red-400'>{errors.yearOfUse.message}</p>}
                        </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Year of Purchase</span></label>
                            <input type="date" {...register("YearOfPurchase", {
                                required: true
                            })} className="input input-bordered w-96" />
                            {errors.YearOfPurchase && <p className='text-red-400'>{errors.YearOfPurchase.message}</p>}
                        </div>
                        <div className="form-control w-96">
                            <label className="label"> <span className="label-text">Photo</span></label>
                            <input type="file" {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered w-96" />
                            {errors.img && <p className='text-red-400'>{errors.img.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="form-control w-96">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea className="textarea  lg:w-[875px] w-[384px] h-[150px] textarea-bordered" {...register("description", {
                        required: true
                    })} placeholder="Description"></textarea>
                    {errors.description && <p className='text-red-400'>{errors.description.message}</p>}
                </div>
                <div className='flex justify-end mr-[80px]'><button className='btn bg-primary text-white w-48 mt-4' type="submit">add Products</button></div>
            </form>
        </div>
    );
};

export default AddProduct;