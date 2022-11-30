import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://carmax-server-alpha.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories)
    return (
        <div>
            {
                categories &&

                <div className=' my-32'>
                    <p className='text-3xl text-red-400 font-bold text-center'>We Sell </p>
                    <p><span className='border border-t-2'></span></p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 sm:mx-auto'>
                        {
                            categories?.map(category =>
                                <div
                                    key={category._id}
                                    className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-2 pt-2">
                                        <img src={category.img} alt="Shoes" className="rounded-xl h-[120px]" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-2xl mt-0 font-bold">{category.Category}</h2>
                                        <div className="card-actions">
                                            <Link to={`/category/${category?.Category}`}><button className="btn btn-primary text-white w-32">See All</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div >
                </div >
            }
        </div>
    );
};

export default Categories;