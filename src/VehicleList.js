import React from "react";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';

import scooty from './images/honda_activa_6g.jpg';

const vehicleDetails = [

    {
        imageSrc: './images/honda_activa_6g',
        vehicleName: "Honda Activa 6G",
        regularPrice: 699,
        price: 649,
    },
    {
        imageSrc: './images/Duke_Bike.png',
        vehicleName: "KTM Duke 200",
        regularPrice: 1299,
        price: 1149,
    },
    {
        imageSrc: './images/avenger_bike.png',
        vehicleName: "Avengers",
        regularPrice: 1299,
        price: 999,
    },
    {
        imageSrc: './images/royal_enfield.jpg',
        vehicleName: "Royal Enfield",
        regularPrice: 1399,
        price: 1359,
    },
    {
        imageSrc: './images/thunderbird.png',
        vehicleName: "Royal Enfield Thunderbird",
        regularPrice: 1399,
        price: 1359,
    },
]


const VechileList = () => {
    return (
        vehicleDetails.map((element) => {
            return (
                <>
                    <div className="row">
                        <Card >
                            <CardActionArea>
                                <CardMedia component="img" height="140" image={element.imageSrc} alt="honda Activa" sx={{ objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {element.vehicleName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <del className='m-2'>{element.regularPrice} </del>
                                        Rs. {element.price}/DAY
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='bike_book_now_button'>
                                <a href="tel:8127775550">
                                    <Button size="medium" variant="contained" color="success">
                                        Book Now
                                    </Button>
                                </a>
                            </CardActions>
                        </Card>
                    </div>
                </>
            )
        })
    );
}
export default VechileList;