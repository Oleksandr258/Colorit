import React from 'react';
import classes from './MainImg.module.css';

import SocialNetworks from '../SocialNetworks/SocialNetworks';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { useTranslation } from 'react-i18next';

const MainImg = props => { 
    const { t, i18n } = useTranslation();
    return (
          <header>
        
            <div className={classes.mainImgWrapper}>

                <div className={classes.mainImgtext1}>
                    <h1>COLORIT</h1>

                </div>
                <div className={classes.mainImgtext}>
                    <h6>{t('YOUTH JOURNAL OF CONTEMPORARY ART')}</h6>
                   
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
    } 

export default MainImg;