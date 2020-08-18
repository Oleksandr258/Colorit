import React from 'react';
import classes from './NewAbstractionist.module.css';
import picTile5 from '../../../img/b5.jpg';
import picTile6 from '../../../img/b6.jpg';
import picTile7 from '../../../img/b7.jpg';
import picTile8 from '../../../img/b8.jpg';
import { useTranslation } from 'react-i18next';

const NewAbstractionist = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
           
            {t('NEWBREAKED ABSTRACTIST')}
            </div>
            <div className={classes.pageContent2}>

                <div className={classes.smallText}>
                    <p> {t('Interview with an aspiring artist')}</p>

                    <p> {t('In this section, we meet young artists')}</p>
                    <br></br>
                    <p> {t('Today we interview anonymous artist')}</p>
        
                </div>

                <h3> {t('Why did you decide to stay behind the mask?')}</h3>
                <div className={classes.line}>
                    <p> {t('I want to communicate with')}</p>
                </div>

                <h3> {t('When did you become interested in the visual arts?')}</h3>

                <div className={classes.line}>
                    <p> {t('From an early age')}</p>
                </div>
                <div><img src={picTile5} alt="Main image" />
                    <a href=" https://etsy.me/39QEreK" >
                        anonymous</a>
                </div>
                <h3> {t('What emotions or even events that triggered those emotions influenced your inspiration?')}</h3>
                <div className={classes.line}>
                    <p> {t('During the quarantine')}</p>
                </div>
                <div><img src={picTile6} alt="Main image" />
                    <a href=" https://etsy.me/39QEreK" >
                        anonymous</a>
                </div>
                <h3> {t('Why abstract art?')}</h3>

                <div className={classes.line}>
                    <p> {t('Because here')}</p>
                </div>
                <div><img src={picTile7} alt="Main image" />
                    <a href=" https://etsy.me/39QEreK" >
                        anonymous</a>
                </div>
                <h3> {t('Do you have any rituals that you follow before you start creating? Signs you believe in?')}</h3>

                <div className={classes.line}>
                    <p> {t('It will sound boring')}</p>
                </div>
                <div><img src={picTile8} alt="Main image" />
                    <a href=" https://etsy.me/39QEreK" >
                        anonymous</a>
                </div>
                <h3> {t('What makes you happy?')}</h3>
                <div className={classes.line}>

                    <p> {t('When I am alone')}</p>

                </div>
                <h3> {t('It was nice to talk')}</h3>
                <div className={classes.endLine}>
                </div>

            </div>
        </div>
    )
}

export default NewAbstractionist;