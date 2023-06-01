import React from 'react';
import './css/LadakhTrip.css';
import Button from '@mui/material/Button';
import { Carousel } from 'react-bootstrap';

import ladakh1 from './images/ladakh1.jpg';
import ladakh2 from './images/ladakh2.jpg';
import ladakh3 from './images/ladakh3.jpg';
import ladakh4 from './images/ladakh4.jpg';
import ladakh5 from './images/ladakh5.jpg';
import ladakh6 from './images/ladakh6.jpg';
import ladakh7 from './images/ladakh7.jpg';
import ladakh8 from './images/ladakh8.jpg';

import { BiRupee } from 'react-icons/bi';

const Ladakh_Trip = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <p style={{ fontSize: "3rem" }} className="text-center">Tour Packages</p>

                    <div className="col-md-6 mb-5 order-md-1">
                        <Carousel controls={true} >
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh1} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh2} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh3} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh4} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh5} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh6} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh7} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={ladakh8} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-md-6 order-md-0">
                        <p className="text-center" style={{ fontSize: "1.5rem" }}>Leh Ladakh 10N-11D</p>

                        <ul >
                            <p className='p-0 m-0 mb-2'>Included In Package</p>
                            <li>Breakfast & Dinner</li>
                            <li>Hotels OR Camping</li>
                            <li>Bike Options: Royal Enfield, Classic 350, Thunderbird</li>
                            <li>Backup
                                <ul >
                                    <li>Emergency Toolkit</li>
                                    <li>Luggage Toolkit</li>
                                    <li>Addon: Mechanic(Rs.1000/DAY)</li>
                                </ul>
                            </li>
                            <li>Sightseeing</li>
                        </ul>
                        <p className='m-0 p-0'><del> 33999</del> <BiRupee />29999/- PER ADULT</p>
                        <a href="tel:8127775550" >
                            <Button variant="contained" className='mt-4' color="success">Enquire Now</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ladakh_Trip;