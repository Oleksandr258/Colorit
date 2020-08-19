import React from 'react';
import './ArtNews.css';
import picArtNews from '../../../img/i4.jpg';
import { useTranslation } from 'react-i18next';


const ArtNews = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="titleLine">
            {t('ART NEWS')} 
            </div>
            <div className="artNewsCont" >


              

            </div>

        </div>
    )
}

export default ArtNews;