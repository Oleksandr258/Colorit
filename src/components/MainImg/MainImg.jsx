import React from 'react';
import classes from './MainImg.module.css';

import SocialNetworks from '../SocialNetworks/SocialNetworks';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const MainImg = props => (
           <header>
        
            <div className={classes.mainImgWrapper}>

                <div className={classes.mainImgtext1}>
                    <h1>COLORIT</h1>

                </div>
                <div className={classes.mainImgtext}>
                    <h6>МОЛОДЕЖНЫЙ ЖУРНАЛ О СОВРЕМЕННОМ ИСКУССТВЕ</h6>
                </div>
                <div className={classes.socialNetworksWrapper}>
                    <SocialNetworks />
                </div>
                <div className={classes.drawerToggleButton}>
                    <DrawerToggleButton click={props.drawerCklickHandler} />
                </div>
            </div>
        
        </header>
    )
    

export default MainImg;