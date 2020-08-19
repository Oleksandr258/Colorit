import React from 'react';
import classes from './Navbar.module.css';
import { useTranslation } from 'react-i18next';



const Navbar = () => {
    const { t, i18n } = useTranslation();
    return (
        <nav>

            <div className={classes.navbarWrapper}>
                <div className={classes.navbarItems}>
                {t('')}
                    <ul>
            <li><a href="/"> {t('HOME')}</a></li>
            <li><a href="/interviewwithbeginner"> {t('HEADING \"INTERVIEW WITH A BEGINNER\"')}</a></li>
            <li><a href="/artnews"> {t('ART NEWS')}</a></li>
            <li><a href="/advices"> {t('TIPS')}</a></li>
            <li><a href="/inspirationspaces"> {t('SPACES FOR INSPIRATION')}</a></li>
            <li><a href="/artistssculptors"> {t('ARTISTS SCULPTORS')}</a></li>
            <li><a href="/newsoftheday"> {t('NEWS OF THE DAY')}</a></li>
            <li><a href="/creativeperson"> {t('INTERVIEW WITH A CREATIVE PERSON')}</a></li>
            <li><a href="/artdiscover"> {t('DISCOVERY OF THE ART')}</a></li>
        </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;