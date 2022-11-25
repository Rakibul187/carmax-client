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
            <p>Our All Products Categories {categories.length}</p>
            {
                categories?.map(category =>
                    <p key={category._id}>
                        <Link to={`/category/${category?.Category}`}>{category?.Category}</Link>
                    </p>)
            }
        </div>
    );
};

export default Categories;