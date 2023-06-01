import React from 'react';
import { Carousel } from 'react-bootstrap';
import Himalayan1 from './images/Himalayan_BIke.jpg';
import RoyalEnfield1 from './images/Royal-Enfield-Himalayan.jpg';
import RoyalEnfield2 from './images/Royal-Enfield-Himalayan-Motorcycle.webp';
import Trekking from './images/Intrepid_Travel_Chile_Patagonia_trekking.jpg';
import Travel_Guide from './images/Tour_Guide.jpg';

import './css/Community_benefits.css';

// icons
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoIosTime } from 'react-icons/io';
import { MdLocalOffer } from 'react-icons/md';
const Community = () => {
    return (
        <div>
            <div className="container">
               

                <div className="row left_side_slider community_box"> <p id='community_sub_heading' >Book your next trip with tripkaroo</p>
                    <div className="col-md-6 mb-5 mx-auto p-0">
                        <Carousel controls={false} >
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={Himalayan1} alt="Image" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={RoyalEnfield1} alt="Image" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={RoyalEnfield2} alt="Image" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={Trekking} alt="Image" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={Travel_Guide} alt="Image" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <p className='text-center community_head'  >A community to make your <span style={{ color: "red" }}>trip</span> Amazing</p>
                        <div className="row community_benefits">
                            <div className="col-md-4">
                                <p><BsCheckCircleFill className='benefits_icon' /></p>
                                <p>Assured Pre-booking </p>
                            </div>
                            <div className="col-md-4">
                                <p>  <MdLocalOffer className='benefits_icon' /></p>
                                <p> Offers </p>
                            </div>
                            <div className="col-md-4">
                                <p> <IoIosTime className='benefits_icon' /></p>
                                <p> Time Saving</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;