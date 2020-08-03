import React from 'react';
import classes from './Content.module.css';
import Tile from './Tile1/Tile1';
import Tile2 from './Tile2/Tile2';
import Tile3 from './Tile3/Tile3';
import Tile4 from './Tile4/Tile4';
import Tile5 from './Tile5/Tile5';
import Tile6 from './Tile6/Tile6';
import Tile7 from './Tile7/Tile7';
import Tile8 from './Tile8/Tile8';
import Tile9 from './Tile9/Tile9';
import Tile10 from './Tile10/Tile10';
import Tile11 from './Tile11/Tile11';
import Tile12 from './Tile12/Tile12';




const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.tile1}>
              <Tile />   
            </div>
            <div className={classes.tile2}>
              <Tile2 />   
            </div>
            <div className={classes.tile3}>
              <Tile3 />   
            </div>
            <div className={classes.tile4}>
              <Tile4 />   
            </div>
            <div className={classes.tile5}>
              <Tile5 />   
            </div>
            <div className={classes.tile6}>
              <Tile6 />   
            </div>
            <div className={classes.tile7}>
              <Tile7 />   
            </div>
            <div className={classes.tile8}>
              <Tile8 />   
            </div>
            <div className={classes.tile9}>
              <Tile9 />   
            </div>
            <div className={classes.tile9}>
              <Tile9 />   
            </div>
            <div className={classes.tile10}>
              <Tile10 />   
            </div>
            <div className={classes.tile11}>
              <Tile11 />   
            </div>
            <div className={classes.tile11}>
              <Tile11 />   
            </div>
            <div className={classes.tile12}>
              <Tile12 />   
            </div>
           
        </div>
       

    )
}

export default Content;