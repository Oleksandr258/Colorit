import React from 'react';
import classes from './SocialNetworks.module.css';
import picSocialNetworks from '../../img/instagram1.png';


const SocialNetworks = () => {
    return (
        <div className={classes.socialNetworks}>
        <img src={picSocialNetworks} alt="Social networks" />
       
</div>
    )
}

export default SocialNetworks;