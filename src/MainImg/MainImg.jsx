import React from 'react';
import classes from './MainImg.module.css';
import mainPic from '../img/Main_pic2.png';
import SocialNetworks from '../SocialNetworks/SocialNetworks';


const MainImg = () => {
    return (
        <div>
            <div className={classes.mainImgWrapper}>
                {/* <div className={classes.mainImg}>
        <img src={mainPic} alt="Main image" />
       </div> */}
                <div className={classes.mainImgtext1}>
                    <h1>COLORIT</h1>

                </div>
                <div className={classes.mainImgtext}>
                    <h6>МОЛОДЕЖНЫЙ ЖУРНАЛ О СОВРЕМЕННОМ ИСКУССТВЕ</h6>
                </div>
                <div className={classes.socialNetworksWrapper}>
                    <SocialNetworks />
                </div>
            </div>
        </div>
    )
}

export default MainImg;