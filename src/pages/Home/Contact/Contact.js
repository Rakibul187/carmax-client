import React from 'react';
import bg from '../../../assets/errorimg/contactBg.jpg'
const Contact = () => {
    return (
        <div>
            <div>
                <div className="hero rounded-lg mt-24 max-w-[1200px] mx-auto"
                    style={{
                        background: `url(${bg})`,
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="card  w-full max-w-sm ">
                        <div className="card-body">
                            <h1 className='text-3xl text-red-400 font-bold text-center'>Contact Us</h1>
                            <h1 className='text-3xl font-semibold text-red-400 text-center mb-2'>Stay connected with us</h1>
                            <div className="form-control gap-2">
                                <input type="test" placeholder="Your Name" className="input input-bordered" />
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                                <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                            </div>
                            <div className=" text-center mt-3">
                                <button className="btn btn-primary text-white text-white w-32">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;