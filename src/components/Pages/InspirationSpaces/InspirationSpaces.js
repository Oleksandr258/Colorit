import React from 'react';
import './InspirationSpaces.css'
import picTile from '../../../img/i1.jpg';

const InspirationSpaces = () => {
    return (
        <div >
           <div className="titleLine">
                МЕСТА ДЛЯ ВДОХНОВЕНИЯ
            </div>


            <div className="inspirationPlacesCont">

                    <li><a href="/inspirationspaces/blagaj" > <img src={picTile} alt="butiful places" />
        Топ 5 самых красивых мест для пейзажей</a></li>
        


            </div>

        </div>
    )
}

export default InspirationSpaces;