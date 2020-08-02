import React from 'react';
import classes from './Header.module.css';
import imageLogoColorit from '../img/Colorit_logo.jpg';


const Header = () => {
    return <header 
    className={classes.header} 
    >

        <img src={imageLogoColorit} alt="ligo" />

    </header>
}

export default Header;