import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const Payment = () => {

    const booking = useLoaderData()
    console.log('from booking', booking)


    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
    return (
        <div className='mt-6 ml-6'>
            <p className='text-2xl font-semibold '>Payment for {booking?.productName}</p>
            <p>Please pay <strong>${booking?.resellPrice}</strong> for buy {booking?.productName}</p>
            <div className='w-96 my-4 bg-slate-100 rounded p-6 '>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;