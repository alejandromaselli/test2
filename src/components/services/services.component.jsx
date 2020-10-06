import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './services.styles.sass';



const Services = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    });
    return(
        <div data-aos="zoom-in" data-aos-once="true" className="services">
            <div className="section" data-aos="zoom-in" data-aos-once="true" >
                <i className="fa fa-truck"></i>
                <div className="text">
                    <h4>FREE SHIPPING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iacullis quam. Integer accumsan tincidut fringilla.</p>
                </div>
            </div>
            <div className="section" data-aos="zoom-in" data-aos-once="true" >
                <i className="fa fa-undo"></i>
                <div className="text">
                    <h4>FREE RETURNS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iacullis quam. Integer accumsan tincidut fringilla.</p>
                </div>
            </div>
            <div className="section" data-aos="zoom-in" data-aos-once="true" >
                <i className="fa fa-question-circle"></i>
                <div className="text">
                    <h4>CUSTOMER SUPPORT</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iacullis quam. Integer accumsan tincidut fringilla.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;