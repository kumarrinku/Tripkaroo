import React from 'react';
import './css/Homepage.css';
import Typewriter from 'typewriter-effect';
import Services from './Services'; 
import Community from './Community';
import RentalBike from './RentalBike';
import DownloadSection from './DownloadSection';
import TripGuide from './TripGuide';
import Bikes from './Bikes';



const Homepage = () => {


    return (
        <>
            <div className="container-fluid banner">
                <div className="row">
                    <div className="col-md-12">
                        <div className='text-center' id='homepage_tagline'>
                            <p>Get.Set.Ready.</p>
                            <p className='d-inline-block'>For&nbsp;</p>
                            <span className='tagline d-inline-block'>
                                <Typewriter options={{
                                    strings: ['Adventure.', 'Thrill.', 'Exploration.', "Trip."], autoStart: true, loop: true,
                                }} />
                            </span>
                        </div>

                        <div>
                            <p className='text-center homepage_sub_content'>
                                Let's Explore the world with hassle free experiance, amazing culture, and crazy community
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Services />
            <Bikes />
            <RentalBike />
            <TripGuide />
            <Community />
            <DownloadSection />
        </>
    );
};

export default Homepage;

