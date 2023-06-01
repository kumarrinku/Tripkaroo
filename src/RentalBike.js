import React from 'react';

import { MdOutlineCleaningServices } from 'react-icons/md';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';

import './css/RentalBike.css';
const RentalBike = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row text-center RentalBike_box">
                    <div className="col-md-6 mb-5">
                        <div className='left_side_scooter_img'></div>
                    </div>

                    <div className="col-md-6">

                        <div className="row right_side_RentalBike_box">
                            <p style={{ fontSize: "1.3rem" }}>Include with every rental service</p>
                            <div className="col-md-4">
                                <p>  <GiFullMotorcycleHelmet className='RentalBike_left_icon' /></p>
                                <p> Helmet </p>
                            </div>
                            <div className="col-md-4">
                                <p><MdOutlineCleaningServices className='RentalBike_left_icon' /></p>
                                <p> Well Maintained</p>
                            </div>

                            <div className="col-md-4">
                                <p>  <BiSupport className='RentalBike_left_icon' /></p>
                                <p> Customer Support </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalBike;
