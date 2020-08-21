import React from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';

const Advices = () => {
    const { t, i18n } = useTranslation();
    return (
        <div >
 <div className="titleLine">
 {t('TIPS')}
            </div>

        </div>
    )
}

export default Advices;