import React from 'react';
import './CreativePerson.css'
import picTile from '../../../img/i5.jpg';
import picTile2 from '../../../img/i2.jpg';
import picTile3 from '../../../img/b3.jpg';
import { useTranslation } from 'react-i18next';

const CreativePerson = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
 <div className="titleLine">
 {t('INTERVIEW WITH A CREATIVE PERSON')} 
            </div>


            <div className="artistsSculptorsCont">

                  
        <li><a href="/embroidery" > <img src={picTile3} alt="embroidery" />
        {t('EMBROIDERY ART OR GOLDEN HANDS')}</a></li>
        
        <li><a href="/newabstractionist" > <img src={picTile2} alt="anonimus" />
        {t('NEWBREAKED ABSTRACTIST')}</a></li>
          </div>

        </div>
    )
}

export default CreativePerson;