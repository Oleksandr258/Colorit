import React from 'react';
import './InterviewWithBeginner.css'
import picTile from '../../../img/i2.jpg';
import picTile3 from '../../../img/i3.jpg';

const InterviewWithBeginner = () => {
    return (
        <div>
            <div className="titleLine">
                РУБРИКА "ИНТЕРВЬЮ У НАЧИНАЮЩЕГО"
            </div>
            <div className="interviewWrapper" >


                <li><a href="/newabstractionist" > <img src={picTile} alt="anonimus" />
        Искусство спасло меня и сделало счастливым/ой...</a></li>

            </div>

        </div>
    )
}

export default InterviewWithBeginner;