import React from 'react';
import './InterviewWithBeginner.css'
import picTile from '../../../img/i2.jpg';
import picTile3 from '../../../img/i3.jpg';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';

const InterviewWithBeginner = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="titleLine">
            {t('HEADING \"INTERVIEW WITH A BEGINNER\"')} 
            </div>
            <div className="interviewWrapper" >


                <li><NavLink to="/newabstractionist" > <img src={picTile} alt="anonimus" />
                {t('NEWBREAKED ABSTRACTIST')}</NavLink></li>

            </div>

        </div>
    )
}

export default InterviewWithBeginner;