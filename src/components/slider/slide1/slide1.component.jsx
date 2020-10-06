import React, { useEffect } from 'react';
import './slide1.styles.sass';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Slide1 = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    return(
        <div data-aos="zoom-in" className="slider">
            <div className="image">
                <img width="100%" src="../images/hero_1.png" alt="shoes" />
            </div>
            <div className="text">
                <h1>Finding Your Perfect Shoes</h1>
                <p>Lorem ipsumdolor sit amet, consecteur adipiscing elit. Phasellusat iaculis quam. Integer accusam tincidunt fringilia</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    );
}

export default Slide1;