import React from 'react';
import Categories from '../../Products/Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className=' max-w-[1200px] mx-auto mt-10'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;