import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';

function LangMenu () {
    const { t, i18n } = useTranslation();
    const [locale, setLocale] = useState('ru');
    const handleChangeLocale = (lan) => {
setLocale(lan);
i18n.changeLanguage(lan);
    }

    return (
        <div>
            <select value={locale} onChange={(e) => handleChangeLocale(e.target.value)}>
            <option value="ru">Ru</option>
            <option  value="en">Eng</option>
            </select>
            
        </div>
    )
}

export default LangMenu;