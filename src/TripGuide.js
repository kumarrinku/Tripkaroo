import React from 'react';
import './css/TripGuide.css';

import { FaLanguage } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';




const TripGuide = () => {
    return (
        <div>
            <div className="container-fluid mb-5">
                <div className="row text-center trip_guide_box">

                    <div className="col-md-6 mb-5 order-md-0">
                        <div className="row right_side_tripGuide_box">
                            <p style={{ fontSize: "1.3rem" }}>Hey! You Got A Control To Choose Your Best Trip Guide With</p>
                            <div className="col-md-3">
                                <p className='trip_guide_icon' ><FaLanguage /></p>
                                <p>Language Options</p>
                            </div>
                            <div className="col-md-3">
                                <p className='trip_guide_icon' ><MdAttachMoney /></p>
                                <p> Price Filter</p>
                            </div>

                            <div className="col-md-3">
                                <p className='trip_guide_icon' > <AiOutlineMessage /></p>
                                <p> Reviews </p>
                            </div>
                            <div className="col-md-3">
                                <p className='trip_guide_icon' > <GoVerified /></p>
                                <p> Verified Guide </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 mt-5 order-md-1">
                        <div id='right_side_trip_guide_img'></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TripGuide;