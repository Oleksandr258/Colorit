import React from 'react';
import './ArtDiscover.css'
import picTile from '../../../img/i5.jpg';
import picTile6 from '../../../img/i6.jpg';
import picTile3 from '../../../img/b3.jpg';
import picTile4 from '../../../img/i4.jpg';
import { useTranslation } from 'react-i18next';

const ArtDiscover = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
 <div className="titleLine">
 {t('DISCOVERY OF THE ART')}
            </div>


            <div className="artistsSculptorsCont">

            <li><a href="/embroidery" > <img src={picTile3} alt="embroidery" />
            {t('EMBROIDERY ART OR GOLDEN HANDS')}</a></li>
                    <li><a href="/photographers" > <img src={picTile} alt="photographers" />
                    {t('PHOTOGRAPHERS OF THE NEW GENERATION')}</a></li>
       
        <li><a href="/digitalart" > <img src={picTile4} alt="digitalart" />
        {t('DIGITAL ART')} </a></li>
       
        



        </div>

        </div>
    )
}

export default ArtDiscover;