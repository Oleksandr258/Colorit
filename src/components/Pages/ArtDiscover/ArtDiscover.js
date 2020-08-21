import React from 'react';
import './ArtDiscover.css'
import picTile from '../../../img/i5.jpg';
import picTile6 from '../../../img/i6.jpg';
import picTile3 from '../../../img/b3.jpg';
import picTile4 from '../../../img/i4.jpg';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';

const ArtDiscover = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
 <div className="titleLine">
 {t('DISCOVERY OF THE ART')}
            </div>


            <div className="artistsSculptorsCont">

            <li><NavLink to="/embroidery" > <img src={picTile3} alt="embroidery" />
            {t('EMBROIDERY ART OR GOLDEN HANDS')}</NavLink></li>
                    <li><NavLink to="/photographers" > <img src={picTile} alt="photographers" />
                    {t('PHOTOGRAPHERS OF THE NEW GENERATION')}</NavLink></li>
       
        <li><NavLink to="/digitalart" > <img src={picTile4} alt="digitalart" />
        {t('DIGITAL ART')} </NavLink></li>
       
        



        </div>

        </div>
    )
}

export default ArtDiscover;