import React from 'react';
import classes from './DigitalArt.module.css';
import picTile1 from '../../../img/b4.jpg';
import picTile2 from '../../../img/d2.jpg';
import picTile3 from '../../../img/d2.jpg';
import picTile4 from '../../../img/d3.jpg';
import picTile5 from '../../../img/d4.jpg';
import picTile6 from '../../../img/d5.jpg';

const DigitalArt = () => {
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
                КОМПЬЮТЕРНОЕ ИСКУССТВО
            </div>
            <div className={classes.pageContent2}>

                    <div className={classes.pic1}>
                        <img src={picTile1} alt="Main image" />
                       
                    </div>
                    @raretempter
               
                <div className={classes.line}>
                    <p>Все больше оборотов набирает диджитал искусство.Уже многие художники перешли на планшеты и стали писать свои творения там.Стало ли хуже?Мы думаю,что нет.Ведь мы идем в перед и открываем новые блоки искусства,очень крутым примером такой работы есть @raretempter -иллюстратор,который просто взрывает соц.сети своими рисунками.</p>
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
                    <p>Здесь и комиксы и авторская адаптация персонажев Дисней ,селебрети и много других чудесных работ. 
Но не спешите назвать это талантом,за талантом такого масштаба стоят часы тяжелой работы над рисунком и над собой.</p>
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
                    <p>@raretempter  показывает удивительную сторону диджитал,можно часами наблюдать за ее картинами и даже за процессом создания шедевров!!!
Желаем удачи в творчестве и во всех творческих начинаниях</p>
                </div>
                
       
                    <div className={classes.endLine}>
                    </div>
                
            </div>

        </div>
    )
}

export default DigitalArt;
