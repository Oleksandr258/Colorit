import React from 'react';
import './ArtDiscover.css'
import picTile from '../../../img/i5.jpg';
import picTile6 from '../../../img/i6.jpg';
import picTile3 from '../../../img/b3.jpg';
import picTile4 from '../../../img/i4.jpg';

const ArtDiscover = () => {
    return (
        <div >
 <div className="titleLine">
                ОТКРЫТИЕ ИСКУССТВА
            </div>


            <div className="artistsSculptorsCont">

            <li><a href="/embroidery" > <img src={picTile3} alt="embroidery" />
        Искусство вышивки или золотые руки</a></li>
                    <li><a href="/photographers" > <img src={picTile} alt="photographers" />
                    Фотографы нового поколения</a></li>
       
        <li><a href="/digitalart" > <img src={picTile4} alt="digitalart" />
        Диджитал искусство</a></li>
       
        



        </div>

        </div>
    )
}

export default ArtDiscover;