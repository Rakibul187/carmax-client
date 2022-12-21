import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-50 mt-7 max-w-[1200px] mx-auto " style={{ backgroundImage: `url(${banner1})`, height: "65vh" }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className=" text-neutral-content w-full ml-44">
                    <div className="text-white">
                        <h1 className="mb-3 text-5xl font-bold">Love Your Car <br />Guarantee</h1>
                        <p className="mb-5 text-xl">Two day test drives, 30 days return (up to 3000 miles) <br /> & 45 days free services</p>
                        <button className="btn btn-primary text-white">Search Car</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;