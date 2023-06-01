import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import './css/Bikes.css';

import ClipLoader from "react-spinners/ClipLoader";

import Button from '@mui/material/Button';
import vehicle_API from './API_Bikes';
import { Link, NavLink } from 'react-router-dom';

const Bikes = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    const vehicleList = vehicle_API.filter((data) => {
        if (searchTerm == "") {
            return data;
        } else if (data.vehicleName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
        }
    }).map((data, key) => {
        return <div className="col-md-4 mb-4 text-center" key={key}>
            <Card>
                <CardActionArea>
                    <CardMedia component="img" height="140" image={data.images} alt={data.vehicleName} sx={{ objectFit: "contain" }}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.vehicleName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <del className='m-2'>{data.regularPrice} </del>
                            Rs. {data.price}/DAY
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='bike_book_now_button'>
                    <a href="tel:8127775550" >
                        <Button size="medium" variant="contained" color="success">
                            Book Now
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </div>

    })

    return (
        <div>
            <div className="container ">
                <input type="search" placeholder='Search Bike or Car Name' id='bikes_search_bar' onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} autoComplete="off" />
                <div className="row ">
                    {vehicleList}
                </div>
            </div>
        </div>
    );
};

export default Bikes;