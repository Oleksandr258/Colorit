import React from 'react';
import './CreativePerson.css'
import picTile from '../../../img/i5.jpg';
import picTile2 from '../../../img/i2.jpg';
import picTile3 from '../../../img/b3.jpg';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';

const CreativePerson = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
 <div className="titleLine">
 {t('INTERVIEW WITH A CREATIVE PERSON')} 
            </div>


            <div className="artistsSculptorsCont">

                  
        <li><NavLink to="/embroidery" > <img src={picTile3} alt="embroidery" />
        {t('EMBROIDERY ART OR GOLDEN HANDS')}</NavLink></li>
        
        <li><NavLink to="/newabstractionist" > <img src={picTile2} alt="anonimus" />
        {t('NEWBREAKED ABSTRACTIST')}</NavLink></li>
          </div>

        </div>
    )
}

export default CreativePerson;