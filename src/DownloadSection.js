import React from 'react';
import './css/DownloadSection.css';


const Download_section = () => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row DownloadSection_box">
                    <p className='text-center' style={{ fontSize: "2rem",color:"white" }}>Download The App Now</p>
                    <div className="col-md-6 order-md-1">
                        <div id="download_left_side_img"></div>
                    </div>

                    <div className="col-md-6 order-md-0">
                        <div className="download_img_container">
                            <div className="play_store_img"></div>
                            <div className="apple_store_img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download_section;