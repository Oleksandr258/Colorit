import React from 'react';
import classes from './Blagaj.module.css';
import picTile1 from '../../../img/b1.jpg';
import picTile2 from '../../../img/n2.jpg';
import picTile3 from '../../../img/n3.jpg';
import picTile4 from '../../../img/n4.jpg';
import picTile5 from '../../../img/n5.jpg';

import { useTranslation } from 'react-i18next';




function Blagaj() {
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
                {t('TOP 5 MOST BEAUTIFUL LANDSCAPE LOCATIONS')}

            </div>
            <div className={classes.pageContent2}>


                <h3>{t('Bosnia and Herzegovina')}</h3>
                <div><img src={picTile1} alt="Main image" />
                    <div>RossHelen</div>
                </div>
                <div className={classes.line}>
                    <p> {t('Blagaj is a small village')}</p>
                </div>

                <h3> {t('Huacachina, Peru')}</h3>
                <div><img src={picTile2} alt="Main image" />
                    <div>sunsinger </div>
                </div>
                <div className={classes.line}>
                    <p> {t('Huacachina is an oasis')}</p>
                </div>

                <h3>{t('Dongchuan Red Lands, China')}</h3>
                <div><img src={picTile3} alt="Main image" />
                    <div>raywoo </div>
                </div>
                <div className={classes.line}>
                    <p>{t('Dongchuan Red Soil is a')}</p>
                </div>

                <h3>{t('Darvaza \"Door to the underworld\", Turkmenistan')}</h3>
                <div><img src={picTile4} alt="Main image" />
                    <div>tormod sandtorv </div>
                </div>
                <div className={classes.line}>
                    <p>{t('Darvaza is a giant blazing crater within')}</p>
                </div>

                <h3>{t('Lencois Maranhensis, Brazil')}</h3>
                <div><img src={picTile5} alt="Main image" />
                    <div>STYLEPICS </div>
                </div>
                <div className={classes.line}>
                    <p>{t('State Park \"Lençóis Maranhenses\" (Lençóis Maranhenses) is located')}</p>
                </div>



            </div>
            <div className={classes.endLine}>
            </div>

        </div>

    )
}

export default Blagaj;