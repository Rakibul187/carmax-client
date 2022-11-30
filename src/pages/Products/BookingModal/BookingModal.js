import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext)
    const { img, resellPrice, productName, _id } = booking;

    // const date = new Date()
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const buyerMobile = form.mobile.value;
        const meetingLocation = form.location.value;

        if (buyerMobile.length < 11) {
            alert('Mobile number should be 11 digit or more')
        }
        const booking = {
            productName,
            img,
            resellPrice,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerMobile,
            meetingLocation,
            payment: false,
            productId: _id

        }

        fetch("https://carmax-server-alpha.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success("Booking Confirmed")
                    setBooking(null)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{productName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" placeholder="Type here" value={user?.displayName} disabled />
                        <input type="text" placeholder="Type here" value={user?.email} disabled />
                        <input type="text" value={`$ ${resellPrice}`} disabled className="input input-bordered w-full " />
                        <input type="number" name='mobile' placeholder="Your Mobile" required className="input input-bordered w-full " />
                        <input type="text" name='location' placeholder="Meeting Location" required className="input input-bordered w-full " />
                        <input className='w-full btn btn-primary text-white' type='submit' value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;