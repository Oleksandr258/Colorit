import React from 'react';
import './InspirationSpaces.css'
import picTile from '../../../img/i1.jpg';

const InspirationSpaces = () => {
    return (
        <div >
            <div className="title2">
                Места для вдохновения
            </div>


            <div className="inspirationPlacesCont">

                    <li><a href="/interviewwithbeginner" > <img src={picTile} alt="butiful places" />
        Топ 5 самых красивых мест для пейзажей</a></li>
        <li><a href="/interviewwithbeginner" > <img src={picTile} alt="butiful places" />
        Топ 5 самых красивых мест для пейзажей</a></li>
        <li><a href="/interviewwithbeginner" > <img src={picTile} alt="butiful places" />
        Топ 5 самых красивых мест для пейзажей</a></li>
        <li><a href="/interviewwithbeginner" > <img src={picTile} alt="butiful places" />
        Топ 5 самых красивых мест для пейзажей</a></li>
        <li><a href="/interviewwithbeginner" > <img src={picTile} alt="butiful places" />
        Топ 5 самых красивых мест для пейзажей</a></li>



            </div>

        </div>
    )
}

export default InspirationSpaces;