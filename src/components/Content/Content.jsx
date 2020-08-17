import React from 'react';
import './Content.css';

import picTile1 from '../../img/k1.jpg';
import picTile2 from '../../img/k2.jpg';
import picTile3 from '../../img/i2.jpg';
import picTile4 from '../../img/i3.jpg';
import picTile5 from '../../img/i5.jpg';




const Content = () => {
    return (
        <div className="content">
            
                <div className="competitionWraper" >
                    <li><a href="/competition1" > <img src={picTile1} alt="embroidery" />
        <p>Конкурс на лучшую статью об искусстве</p></a></li>
                </div>
                <div className="competitionWraper" >
                    <li><a href="/competition2" > <img src={picTile2} alt="embroidery" />
        <p>Конкурс на лучшую историю об искусстве</p></a></li>
                </div>
            
            <div >
                <li><a href="/newabstractionist" > <img src={picTile3} alt="embroidery" />
            Искусство спасло меня и сделало счастливым/ой...</a></li>
            </div>
            <div >
                <li><a href="/embroidery" > <img src={picTile4} alt="embroidery" />
            Искусство вышивки или золотые руки</a></li>
            </div>
            <div>
                <li><a href="/embroidery" > <img src={picTile5} alt="embroidery" />
            LERA DOPIRCHUK фотограф работы которого завораживают</a></li>
            </div>

        </div>


    )
}

export default Content;