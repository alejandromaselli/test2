import React, {useEffect} from 'react';
import './navbar.styles.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';


const NavBar = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    })
    return(
        <nav data-aos="zoom-in" className="header">
            <div className="search-input">
                <i className="fa fa-search"></i><input type="search" placeholder="Search" />
            </div>
            <div className="title">
                <div className="border-box">
                    <h1>SHOPPERS</h1>
                </div>
            </div>
            <div className="icons">
                <i className="fa fa-user"></i>
                <i className="fa fa-user-alt"></i>
                <i className="fa fa-heart" ></i>
                <i className="fa fa-shopping-cart"></i>
                <i className="fa fa-circle"><span>1</span></i>
                <i className="fa fa-bars"></i>
            </div>
            <br/>
            <br/>
        </nav>    
    );
}

export default NavBar;