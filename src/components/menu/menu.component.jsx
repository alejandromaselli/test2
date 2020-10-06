import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css'
import './menu.styles.sass'

const Menu = () => {
    
    useEffect(() => {
        AOS.init({duration: 2000})
    });
    
    return(
        <nav data-aos="fade-right" className="menu">
            <ul className="main-list">
                <ul className="secondary-list-item">
                    <a href="/">HOME</a>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                </ul>
                <ul className="secondary-list-item">
                    <a href="/">ABOUT</a>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                </ul>
                <ul className="secondary-list-item">
                    <a href="/">SHOP</a>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                </ul>
                <ul className="secondary-list-item">
                    <a href="/">CATALOUGE</a>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                </ul>
                <ul className="secondary-list-item">
                    <a href="/">NEW ARRIVALS</a>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                </ul>
                <ul className="secondary-list-item">
                    <a href="/">CONTACT</a>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                    <li className="secondary-list-item">Menu Item</li>
                </ul>
            </ul>  
        </nav>
    );
}

export default Menu;