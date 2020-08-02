import React from 'react';
import classes from './SocialNetworks.module.css';
import socialNetworks from '../img/sotial_networks.jpg';


const SocialNetworks = () => {
    return (
        <div className={classes.socialNetworks}>
        <img src={socialNetworks} alt="Social networks" />
       
</div>
    )
}

export default SocialNetworks;