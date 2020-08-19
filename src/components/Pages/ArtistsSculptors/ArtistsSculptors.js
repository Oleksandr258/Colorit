import React from 'react';
import './ArtistsSculptors.css'

import { useTranslation } from 'react-i18next';

const ArtistsSculptors = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
            <div className="titleLine">
                {t('ARTISTS SCULPTORS')}
            </div>


            <div className="artistsSculptorsCont">

            </div>

        </div>
    )
}

export default ArtistsSculptors;