import React, { useState } from 'react';
import TravelPlace from '../TravelPlace/TravelPlace';
import locationData from '../../fakeData/locationData';
import './Booking.css';
import { useHistory } from 'react-router-dom';
import WhyChoose from '../WhyChoose/WhyChoose';
import Footer from '../Footer/Footer';

const Booking = () => {
    const location = locationData;
    const [locationId, setLocationId] = useState(1);
    const [title, setTitle] = useState('Cox’s bazar');
    const [description, setDescription] = useState('fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and Khyang monastery it ...');
    let redirectDetail = useHistory();

    const handleChange = (id, title, shortDescription) => {// id , title, description set
        setLocationId(id);
        setTitle(title);
        setDescription(shortDescription);
    }
    const btnHandleClick = () => {// when button click redirect to detail page
        redirectDetail.push(`/bookingDetail/${locationId}`);
    }

    return (
        <main>
            <div className="d-flex ">
                <div className="left-side mt-5">
                    <h1 className="title">{title}</h1>
                    <p className="booking-font">{description}</p>
                    <button className="btn booking-btn mt-3" onClick={btnHandleClick}>Booking  <span className="fas fa-arrow-right"></span></button>
                </div>
                <div className="right-side mt-5 ml-5">
                    {
                        location.map(item => <TravelPlace key={item.id} place={item} handleChange={handleChange} />)
                    }
                </div>
            </div>
            <div className="">
                    <WhyChoose/>
            </div>
            <Footer />
        </main>
       
    );
};

export default Booking;