import React from 'react';
import './SideDrawer.css';

import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function sideDrawer(props) {
    debugger;
   // const { t, i18n } = useTranslation();

    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return (
        <nav className={drawerClasses} >
            
            <ul>
                <li><NavLink to="/"> HOME</NavLink></li>
                <li><NavLink to="/interviewwithbeginner"> HEADING \"INTERVIEW WITH A BEGINNER</NavLink></li>
                <li><NavLink to="/artnews"> ART NEWS</NavLink></li>
                <li><NavLink to="/advices"> TIPS</NavLink></li>
                <li><NavLink to="/inspirationspaces">SPACES FOR INSPIRATION</NavLink></li>
                <li><NavLink to="/artistssculptors">ARTISTS SCULPTORS</NavLink></li>
                <li><NavLink to="/newsoftheday">NEWS OF THE DAY</NavLink></li>
                <li><NavLink to="/creativeperson"> INTERVIEW WITH A CREATIVE PERSON</NavLink></li>
                <li><NavLink to="/artdiscover"> DISCOVERY OF THE ART</NavLink></li>
            </ul>
            
        </nav>
    );
};

export default sideDrawer;