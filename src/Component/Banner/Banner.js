import React from 'react'
import bannerimg from "../../Assets/banner.jpg"
import "./Banner.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="Sobha Aranya" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <div className="banner-stick-card">
                            <span>Starting At</span>
                            <h2>4 Cr* Onwards</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>Location</span>
                            <h2>At Sector 103, Gurgaon</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>CONFIGURATIONS</span>
                            <h2>3 , 3.5 & 4.5 BHK APARTMENTS</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>Status</span>
                            <h2>New LAUNCH</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
