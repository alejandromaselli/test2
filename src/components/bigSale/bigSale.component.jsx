import React, { Component, useEffect } from 'react';
import './bigSale.styles.sass';

//const BigSale = () => {
class BigSale extends Component {
  render(){
    return(
        <div data-aos="zoom-in" data-aos-once="true" className="big-sale">
            <div className="title">
                <div className="bar"></div>
                <h2>Big Sale!</h2>
            </div>
            <div className="content">
                <div className="image" data-aos="zoom-in" data-aos-once="true">
                    <img src="./images/blog_1.jpg" alt="blog"/>
                </div>
                <div className="text">
                    <h2>50% less in all items</h2>
                    <p>By <span>Juan Carlos</span> - September 2020</p>
                    <p>Lorem ipsum sit amét, consectetur 
                    adipsicing elit. Quisqam iste dolor acusantium 
                    facere corporis ipsum animi deleniti fugiat. Ex, 
                    veniam?</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
  }
};

export default BigSale;