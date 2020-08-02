import React from 'react';
import classes from './MainImg.module.css';
import mainPic from '../img/Main_pic.png';


const MainImg = () => {
    return (
        <div className={classes.mainImg}>
        <img src={mainPic} alt="Main image" />
       
</div>
    )
}

export default MainImg;