import React from 'react';
import './InterviewWithBeginner.css'
import picTile from '../../../img/i2.jpg';
import picTile3 from '../../../img/i3.jpg';
import { useTranslation } from 'react-i18next';

const InterviewWithBeginner = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="titleLine">
            {t('HEADING \"INTERVIEW WITH A BEGINNER\"')} 
            </div>
            <div className="interviewWrapper" >


                <li><a href="/newabstractionist" > <img src={picTile} alt="anonimus" />
                {t('NEWBREAKED ABSTRACTIST')}</a></li>

            </div>

        </div>
    )
}

export default InterviewWithBeginner;