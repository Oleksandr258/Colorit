import React from 'react';
import { useTranslation } from 'react-i18next';

const NewsOfTheDay = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
<div className="titleLine">
{t('NEWS OF THE DAY')}   
            </div>

        </div>
    )
}

export default NewsOfTheDay;