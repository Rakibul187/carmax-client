import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext)

    const { img, resellPrice, productName } = booking;

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
            meetingLocation
        }

        console.log(booking)

        // setBooking(null)

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
                        <input className='w-full btn btn-primary' type='submit' value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;