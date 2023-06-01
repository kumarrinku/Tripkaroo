import React from 'react';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TripGuide from './images/trip_guide_group.jpg';
import motorycle_png from './images/motorycle_png.jpg';

import './css/Services.css';
import { NavLink } from 'react-router-dom';




const Services = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row services_box">
                    <p className='services_heading'>Services</p>
                    <div className="col-md-6 services_left_col">
                        <NavLink to='/bikes' className="navbar">
                            <Card >
                                <CardActionArea>
                                        <CardMedia component="img" image={motorycle_png} alt="BikeImage" sx={{ margin: "auto", objectFit: "contain" }} height="200"
                                        />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Rental Bike/Car
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            We have simplified the car & bike rentals. Easy & Quick Online Booking with unbeatable rates. Clean & Well Maintained Fleet.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-6 services_right_col">
                        <Card >
                            <CardActionArea>
                                <CardMedia component="img" image={TripGuide} alt="tripGuideImage"
                                    sx={{ margin: "auto", objectFit: "cover" }} height="200" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Trip Guide
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Featuring Trip Guide for Pan India Trips. Choose your trip guide based on Your Language Prefrence, Feedbacks, Unbeatable Price and others.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;



