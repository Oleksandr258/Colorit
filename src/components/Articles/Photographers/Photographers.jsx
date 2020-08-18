import React from 'react';
import classes from './Photographers.module.css';
import picTile1 from '../../../img/f1.jpg';
import picTile2 from '../../../img/f2.jpg';
import picTile3 from '../../../img/f3.jpg';
import picTile4 from '../../../img/f4.jpg';
import picTile5 from '../../../img/f5.jpg';
import picTile6 from '../../../img/f6.jpg';
import picTile7 from '../../../img/f7.jpg';
import picTile8 from '../../../img/f8.jpg';
import { useTranslation } from 'react-i18next';


const Photographers = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
                {t('PHOTOGRAPHERS OF THE NEW GENERATION')}
            </div>
            <div className={classes.pageContent2}>

                <h3>LERA DOPIRCHUK</h3>


                <div className={classes.collage1}>
                    <div className={classes.pic1}>
                        <img src={picTile1} alt="Main image" />
                        @dlvphotooo
                    </div>
                    <div className={classes.pic2}>
                        <img src={picTile2} alt="Main image" />
                    </div>
                </div>


                <div className={classes.line}>
                    <p>{t('Lera is a photographer from Kiev')}</p>
                </div>




                <div className={classes.collage3}>
                    <div className={classes.pic3}>
                        <img src={picTile3} alt="Main image" />
                                @dlvphotooo
                    </div>
                    <div className={classes.pic4}>
                        <img src={picTile4} alt="Main image" />
                    </div>
                </div>


                <h3>VIKA LEVINA</h3>

                <div className={classes.collage5}>
                    <div className={classes.pic5}>
                        <img src={picTile5} alt="Main image" />
                        @dlvphotooo
                    </div>
                    <div className={classes.pic6}>
                        <img src={picTile6} alt="Main image" />
                    </div>
                </div>



                <div className={classes.line}>
                    <p>{t('Vika is a photographer from')}</p>
                </div>
                <div className={classes.collage7}>
                    <div className={classes.pic7}>
                        <img src={picTile7} alt="Main image" />
                        @dlvphotooo
                    </div>
                    <div className={classes.pic8}>
                        <img src={picTile8} alt="Main image" />
                    </div>
                </div>

                <div className={classes.endLine}>
                </div>

            </div>

        </div>
    )
}

export default Photographers;