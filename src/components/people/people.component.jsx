import React, {useEffect} from 'react';
import './people.styles.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

const People = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    });
    return(
        <div data-aos="zoom-in" data-aos-once="true" className="people">
            <div className="people-container">
                <div className="image" data-aos="zoom-in" data-aos-once="true">
                    <div className="gradient"></div>
                    <img src="./images/women.jpg" alt="person"/>
                </div>
                <div className="text">
                    <p data-aos="fade-left">Collections</p>
                    <h1 data-aos="fade-left">WOMEN</h1>
                </div>
            </div>
            <div className="people-container">
                <div className="image" data-aos="zoom-in" data-aos-once="true">
                    <div className="gradient"></div>
                    <img src="./images/children.jpg" alt="person"/>
                    <div className="text">
                        <p data-aos="fade-left" >Collections</p>
                        <h1 data-aos="fade-left" >CHILDREN</h1>
                    </div>
                </div>
            </div>
            <div className="people-container">
                <div className="image" data-aos="zoom-in" data-aos-once="true">
                    <div className="gradient"></div>
                    <img src="./images/men.jpg" alt="person"/>
                    <div className="text">
                        <p>Collections</p>
                        <h1>MEN</h1>
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default People;