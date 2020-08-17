import React from 'react';
import './ArtistsSculptors.css'
import picTile from '../../../img/i5.jpg';
import picTile6 from '../../../img/i6.jpg';

const ArtistsSculptors = () => {
    return (
        <div >
 <div className="title3">
                Художники скульпторы
            </div>


            <div className="artistsSculptorsCont">

                    <li><a href="/interviewwithbeginner" > <img src={picTile} alt="LERA DOPIRCHUK" />
                    LERA DOPIRCHUK фотограф работы которого завораживают</a></li>
        <li><a href="/interviewwithbeginner" > <img src={picTile6} alt="butiful places" />
        фотограф с большим будущим VIKA LEVINA</a></li>
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

export default ArtistsSculptors;