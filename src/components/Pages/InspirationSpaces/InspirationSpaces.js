import React from 'react';
import './InspirationSpaces.css'
import picTile from '../../../img/i1.jpg';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';

const InspirationSpaces = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
           <div className="titleLine">
           {t('SPACES FOR INSPIRATION')} 
            </div>


            <div className="inspirationPlacesCont">

                    <li><NavLink to="/blagaj" > <img src={picTile} alt="butiful places" />
                    {t('TOP 5 MOST BEAUTIFUL LANDSCAPE LOCATIONS')}</NavLink></li>
        
            </div>

        </div>
    )
}

export default InspirationSpaces;