import React from 'react';
import './CreativePerson.css'
import picTile from '../../../img/i5.jpg';
import picTile2 from '../../../img/i2.jpg';
import picTile3 from '../../../img/b3.jpg';

const CreativePerson = () => {
    return (
        <div >
 <div className="titleLine">
               ИНТЕРВЬЮ У ТВОРЧЕСКОГО ЧЕЛОВЕКА
            </div>


            <div className="artistsSculptorsCont">

                    {/* <li><a href="/interviewwithbeginner" > <img src={picTile} alt="LERA DOPIRCHUK" />
                    LERA DOPIRCHUK фотограф работы которого завораживают</a></li>
        <li><a href="/interviewwithbeginner" > <img src={picTile6} alt="butiful places" />
        фотограф с большим будущим VIKA LEVINA</a></li> */}
        <li><a href="/embroidery" > <img src={picTile3} alt="embroidery" />
        Искусство вышивки или золотые руки</a></li>
        
        <li><a href="/newabstractionist" > <img src={picTile2} alt="anonimus" />
        Искусство спасло меня и сделало счастливым/ой...</a></li>
        



        </div>

        </div>
    )
}

export default CreativePerson;