import React from 'react';
import classes from './Competition.module.css';
import { useTranslation } from 'react-i18next';



const Competition1 = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
            {t('COMPETITION FOR THE BEST ARTICLE ABOUT ART')}
            </div>

            <div className={classes.endLine}>
                    </div>

            <div className={classes.pageContent2}>
           
                <div className={classes.line}>
                    <p>{t('Friends!')}</p>
<p>{t('Our team announces a competition')}</p>
<br></br>
 <p>{t('Conditions of the competition:')}</p>

<p>{t('-be over 14 years old')}</p>
<p>{t('-write about art')}</p>
<p>{t('-participation 10 $')}</p>
<p>{t('-write an article with a maximum of 2 pages')}</p> 
<br></br>
<p>{t('You must write an article about art')}</p>
                </div>
                <div className={classes.line}>
                    <p>{t('Link to tickets for participation in the competition:')}</p> 
                        <a href="https://etsy.me/31fTvP6" > 
                        {t('To buy tickets')} </a> 
                         
                </div>
                
            </div>

            <div className={classes.endLine}>
                    </div>
        </div>
    )
}

export default Competition1;