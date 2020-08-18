import React from 'react';
import classes from './Embroidery.module.css';
import picTile1 from '../../../img/b2.jpg';
import picTile2 from '../../../img/e2.jpg';
import picTile3 from '../../../img/e3.jpg';
import picTile4 from '../../../img/e4.jpg';
import picTile5 from '../../../img/e5.jpg';
import picTile6 from '../../../img/e6.jpg';
import picTile7 from '../../../img/e7.jpg';
import picTile8 from '../../../img/e8.jpg';
import picTile9 from '../../../img/e9.jpg';
import picTile10 from '../../../img/e10.jpg';
import picTile11 from '../../../img/e11.jpg';
import picTile12 from '../../../img/e12.jpg';
import picTile13 from '../../../img/e13.jpg';
import { useTranslation } from 'react-i18next';


const Embroidery = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
                {t('EMBROIDERY ART OR GOLDEN HANDS')}
            </div>
            <div className={classes.pageContent2}>

                <div className={classes.smallText}>
                    <p>{t('We interviewed a wonderful needlewoman')} </p>
                </div>



                <h3>{t('What prompted you to do beadwork?')}</h3>
                <div className={classes.line}>
                    <p>{t('In my fourth year of university')}</p>
                </div>
                <div className={classes.collage1}>
                    <div className={classes.pic1}>
                        <img src={picTile1} alt="Main image" />
                    </div>
                    <div className={classes.pic2}>
                        <img src={picTile2} alt="Main image" />
                    </div>
                </div>


                <h3>{t('What or who inspires you?')}</h3>
                <div className={classes.line}>
                    <p>{t('I am inspired by')}</p>
                </div>
                <div className={classes.collage3}>
                    <div className={classes.pic3}>
                        <img src={picTile3} alt="Main image" />
                    </div>
                    <div className={classes.pic4}>
                        <img src={picTile4} alt="Main image" />
                    </div>
                </div>


                <h3>{t('Are you the only creative person in the family?')}</h3>
                <div className={classes.line}>
                    <p>{t('I have a very creative family')}</p>
                </div>
                <div className={classes.collage5}>
                    <div className={classes.pic5}>
                        <img src={picTile5} alt="Main image" />
                    </div>
                    <div className={classes.pic6}>
                        <img src={picTile6} alt="Main image" />
                    </div>
                </div>


                <h3>{t('What do your very first works look like?')}</h3>
                <div className={classes.line}>
                    <p>{t('I heve a braided butterfly made')}</p>
                </div>
                <div className={classes.pic7}><img src={picTile7} alt="Main image" /></div>

                <h3>{t('What do you do when the motivation to create something disappears?')}</h3>
                <div className={classes.line}>
                    <p>{t('This happens every half a year')}</p>
                </div>
                <div className={classes.collage8}>
                    <div className={classes.pic8}>
                        <img src={picTile8} alt="Main image" />
                    </div>
                    <div className={classes.pic9}>
                        <img src={picTile9} alt="Main image" />
                    </div>
                </div>


                <h3>{t('How do you feel when doing what you love?')}</h3>
                <div className={classes.line}>
                    <p>{t('In fact, I love medicine')}</p>
                </div>


                <h3>{t('It was nice to talk')}</h3>
                <div className={classes.endLine}>
                </div>

            </div>

        </div>
    )
}

export default Embroidery;