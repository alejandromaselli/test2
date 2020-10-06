import React from "react";
import "./featuredProducts.styles.sass";

const Slide1 = () => {
    return (
        <>
        <div className="slider-card-container">
        <div className="card" data-aos="zoom-in" data-aos-once="true" >
            <div className="image">
                <img src="./images/cloth_1.jpg" alt="cloth" />
            </div>
            <div className="text">
                <h3>Tank Top</h3>
                <p>Finding Perfect T-shirt</p>
                <h3>$50</h3>
            </div>
        </div>
        </div>
        </>
    );
};

export default Slide1;
