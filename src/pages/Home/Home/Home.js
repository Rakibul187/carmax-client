import React from 'react';
import Categories from '../../Products/Categories/Categories';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className=' max-w-[1200px] mx-auto mt-10'>
            <Banner></Banner>
            <Categories></Categories>
            <Contact></Contact>
        </div>
    );
};

export default Home;