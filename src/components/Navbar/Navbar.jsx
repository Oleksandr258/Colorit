import React from 'react';
import classes from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';




const Navbar = (props) => {
  
    const { t, i18n } = useTranslation();
    
       // i18n.changeLanguage(props.lang);
    
    return (
        
        <nav>

            <div className={classes.navbarWrapper}>
                <div className={classes.navbarItems}>
                
                    <ul>
            <li><NavLink to="/"> {t('HOME')}</NavLink></li>
            <li><NavLink to="/interviewwithbeginner"> {t('HEADING \"INTERVIEW WITH A BEGINNER\"')}</NavLink></li>
            <li><NavLink to="/artnews"> {t('ART NEWS')}</NavLink></li>
            <li><NavLink to="/advices"> {t('TIPS')}</NavLink></li>
            <li><NavLink to="/inspirationspaces"> {t('SPACES FOR INSPIRATION')}</NavLink></li>
            <li><NavLink to="/artistssculptors"> {t('ARTISTS SCULPTORS')}</NavLink></li>
            <li><NavLink to="/newsoftheday"> {t('NEWS OF THE DAY')}</NavLink></li>
            <li><NavLink to="/creativeperson"> {t('INTERVIEW WITH A CREATIVE PERSON')}</NavLink></li>
            <li><NavLink to="/artdiscover"> {t('DISCOVERY OF THE ART')}</NavLink></li>
        </ul>
                </div>
            </div>
        </nav>
        

    )
}

export default Navbar;