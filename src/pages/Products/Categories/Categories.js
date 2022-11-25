import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div className='mt-20'>
            <p className='text-3xl text-center'>We Sell </p>
            <p><span className='border border-t-2'></span></p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 sm:mx-auto'>
                {
                    categories?.map(category =>
                        <div key={category._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="card-actions">
                                    <Link to={`/category/${category?.Category}`}><button className="btn btn-primary">{category.Category}</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </div >
    );
};

export default Categories;