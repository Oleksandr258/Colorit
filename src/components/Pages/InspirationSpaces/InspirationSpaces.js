import React from 'react';
import './InspirationSpaces.css'
import picTile from '../../../img/i1.jpg';
import { useTranslation } from 'react-i18next';

const InspirationSpaces = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
           <div className="titleLine">
           {t('SPACES FOR INSPIRATION')} 
            </div>


            <div className="inspirationPlacesCont">

                    <li><a href="/inspirationspaces/blagaj" > <img src={picTile} alt="butiful places" />
                    {t('TOP 5 MOST BEAUTIFUL LANDSCAPE LOCATIONS')}</a></li>
        
            </div>

        </div>
    )
}

export default InspirationSpaces;