import React from 'react';

import { Carousel } from 'react-bootstrap';
import Button from '@mui/material/Button';

import srinagar1 from './images/srinagar1.jpg';
import srinagar2 from './images/srinagar2.jpg';
import srinagar3 from './images/srinagar3.jpg';
import srinagar4 from './images/srinagar4.jpg';
import srinagar5 from './images/srinagar5.jpg';
import srinagar6 from './images/srinagar6.jpg';
import srinagar7 from './images/srinagar7.jpg';
import srinagar8 from './images/srinagar8.png';

import manali1 from './images/manali1.jpg';
import manali2 from './images/manali2.jpg';
import manali3 from './images/manali3.jpg';
import manali4 from './images/manali4.jpg';
import manali5 from './images/manali5.jpg';
import manali6 from './images/manali6.jpg';
import manali7 from './images/manali7.jpg';
import manali8 from './images/manali8.jpg';

import { BiRupee } from 'react-icons/bi';

import LadakhTrip from './LadakhTrip';

const Packages = () => {
    return (
        <div>
            <LadakhTrip />
            <div className="container mt-5 mb-5">
                <div className="row">                
                    <div className="col-md-6 mb-5">
                        <Carousel controls={true} >
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar1} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar2} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar3} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar4} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar5} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar6} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar7} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={srinagar8} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center" style={{ fontSize: "1.5rem" }}>Srinagar 4N-5D</p>
                        <ul >
                            <p className='p-0 m-0 mb-2'>Included In Package</p>
                            <li>Breakfast & Dinner</li>
                            <li>Bike</li>
                            <li>BackUp</li>
                            <li>Stay</li>
                            <li>Seightseeing</li>
                        </ul>
                        <p className='m-0 p-0'><del>13999</del> <BiRupee />7199 PER ADULT</p>
                        <a href="tel:8127775550">
                            <Button variant="contained" className='mt-4' color="success" >Enquire Now</Button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 mb-5 order-md-1">
                        <Carousel controls={true} >
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali1} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali2} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali3} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali4} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali5} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali6} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali7} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="left_side_images w-100 shadow rounded" src={manali8} alt="Image" style={{ objectFit: "contain" }} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6 order-md-0">
                        <p className="text-center" style={{ fontSize: "1.5rem" }}>Manali 4N-5D</p>

                        <ul >
                            <p className='p-0 m-0 mb-2'>Included In Package</p>
                            <li>Breakfast & Dinner</li>
                            <li>Bike</li>
                            <li>BackUp</li>
                            <li>Stay</li>
                            <li>Seightseeing</li>
                        </ul>
                        <p className='m-0 p-0'><del>  7999</del> <BiRupee />6499 PER ADULT</p>
                        <a href="tel:8127775550" >
                            <Button variant="contained" className='mt-4' color="success">Enquire Now</Button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Packages;