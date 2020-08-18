import React from 'react';
import classes from './DigitalArt.module.css';
import picTile1 from '../../../img/b4.jpg';
import picTile2 from '../../../img/d2.jpg';
import picTile3 from '../../../img/d2.jpg';
import picTile4 from '../../../img/d3.jpg';
import picTile5 from '../../../img/d4.jpg';
import picTile6 from '../../../img/d5.jpg';
import { useTranslation } from 'react-i18next';

const DigitalArt = () => {
        const { t, i18n } = useTranslation();
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
            {t('DIGITAL ART')}    
            {t('')}
            </div>
            <div className={classes.pageContent2}>

                    <div className={classes.pic1}>
                        <img src={picTile1} alt="Main image" />
                       
                    </div>
                    @raretempter
               
                <div className={classes.line}>
                    <p>{t('Many artists have already switched')}</p>
                </div>
               

                <div className={classes.collage3}>
                    <div className={classes.pic3}>
                        <img src={picTile3} alt="Main image" />
                        @raretempter
                    </div>
                    <div className={classes.pic4}>
                        <img src={picTile4} alt="Main image" />
                    </div>
                </div>


                <div className={classes.line}>
                    <p>{t('Here are author')}</p>
                </div>
                
                <div className={classes.collage5}>
                    <div className={classes.pic5}>
                        <img src={picTile5} alt="Main image" />
                        @raretempter
                    </div>
                    <div className={classes.pic6}>
                        <img src={picTile6} alt="Main image" />
                    </div>
                </div>

                <div className={classes.line}>
                    <p>{t('@raretempter shows the amazing')}</p>
                </div>
                
       
                    <div className={classes.endLine}>
                    </div>
                
            </div>

        </div>
    )
}

export default DigitalArt;
