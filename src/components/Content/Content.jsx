import React from 'react';
import './Content.css';

import picTile1 from '../../img/k1.jpg';
import picTile2 from '../../img/k2.jpg';
import picTile3 from '../../img/i2.jpg';
import picTile4 from '../../img/i3.jpg';
import picTile5 from '../../img/i5.jpg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';




const Content = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="content">
            
                <div className="competitionWraper" >
                    <li><NavLink to="/competition1" > <img src={picTile1} alt="embroidery" />
        <p>{t('COMPETITION FOR THE BEST ARTICLE ABOUT ART')}</p></NavLink></li>
                </div>
                <div className="competitionWraper" >
                    <li><NavLink to="/competition2" > <img src={picTile2} alt="embroidery" />
        <p>{t('COMPETITION FOR THE BEST STORY ABOUT ART')}</p></NavLink></li>
                </div>
            
            <div >
                <li><NavLink to="/newabstractionist" > <img src={picTile3} alt="embroidery" />
                {t('NEWBREAKED ABSTRACTIST')} </NavLink></li>
            </div>
            <div >
                <li><NavLink to="/embroidery" > <img src={picTile4} alt="embroidery" />
                {t('EMBROIDERY ART OR GOLDEN HANDS')} </NavLink></li>
            </div>
            <div>
                <li><NavLink to="/embroidery" > <img src={picTile5} alt="embroidery" />
                {t('PHOTOGRAPHERS OF THE NEW GENERATION')} </NavLink></li>
            </div>

        </div>


    )
}

export default Content;