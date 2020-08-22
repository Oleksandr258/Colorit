import React from 'react';
import './SideDrawer.css';

import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function sideDrawer(props) {
   
   // const { t, i18n } = useTranslation();

    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return (
        <nav className={drawerClasses} >
            
            <div onClick={props.click2}>
               
           <Navbar />
            </div>
            
        </nav>
    );
};

export default sideDrawer;