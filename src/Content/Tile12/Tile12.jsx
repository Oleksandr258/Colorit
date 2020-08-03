import React from 'react';
import classes from './Tile12.module.css';
import picTile from '../../img/p12.jpg';


const Tile12 = () => {
    return (
        <div className={classes.picTile}>
        <img src={ picTile} alt="Main image" />
        <p>Now is the time. This modest sentence
             is the driving force behind the new 
             issue. It’s a phrase that is bold and 
             empowering. It is a call to action.</p>
       
</div>
    )
}

export default Tile12;