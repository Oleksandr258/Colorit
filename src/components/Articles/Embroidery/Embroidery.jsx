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



const Embroidery = () => {
    return (
        <div className={classes.pageContent}>
            <div className={classes.titleLine}>
                ИСКУССТВО ВЫШИВКИ ИЛИ ЗОЛОТЫЕ РУЧКИ
            </div>
            <div className={classes.pageContent2}>

                <div className={classes.smallText}>
                    <p>Мы взяли интервью у чудесной  рукодельницы @djozefinna_embroidery </p>
                </div>



                <h3>Что сподвигло Вас заниматься вышивкой бисером ?</h3>
                <div className={classes.line}>
                    <p>«На четвёртом курсе универа я возвращалась домой в часов 2  и сидела дома.Муж был на работе и мне было скучно и не было что делать,тогда я решила  повышивать.Сначала нашла свои старые схемы крестиком и довышивала ,потом подумала что нужно что-то необычное и сделала работу гладью,потом бисером ,а потом начала продавать»</p>
                </div>
                <div className={classes.collage1}>
                    <div className={classes.pic1}>
                        <img src={picTile1} alt="Main image" />
                    </div>
                    <div className={classes.pic2}>
                        <img src={picTile2} alt="Main image" />
                    </div>
                </div>


                <h3>Что или кто Вас вдохновляет?</h3>
                <div className={classes.line}>
                    <p>« Меня вдохновляют работы других дизайнеров модельеров ,очень вдохновляет  природа и исскуство»</p>
                </div>
                <div className={classes.collage3}>
                    <div className={classes.pic3}>
                        <img src={picTile3} alt="Main image" />
                    </div>
                    <div className={classes.pic4}>
                        <img src={picTile4} alt="Main image" />
                    </div>
                </div>


                <h3>Вы единственный творческий человек в семье?</h3>
                <div className={classes.line}>
                    <p>«У меня очень творческая семья,я врач и моя бабушка врач и она всю жизнь   пела в хоре ,мама поет,дядя фотограф,сестра иллюстратор.У нас каждый проявляется в творчестве по своему .Вышивать, кстати, меня научила бабушка и тетя»</p>
                </div>
                <div className={classes.collage5}>
                    <div className={classes.pic5}>
                        <img src={picTile5} alt="Main image" />
                    </div>
                    <div className={classes.pic6}>
                        <img src={picTile6} alt="Main image" />
                    </div>
                </div>


                <h3>Как выглядят Ваши самые первые работы?</h3>
                <div className={classes.line}>
                    <p>С детства есть плетеная бабочка из бисера,еще есть работы которые я начинала 5 лет назад,выглядят довольно неплохо.</p>
                </div>
                <div className={classes.pic7}><img src={picTile7} alt="Main image" /></div>

                <h3>Что Вы делаете когда пропадает мотивация что-либо творить?</h3>
                <div className={classes.line}>
                    <p>«У меня такое случается каждые пол года.Тогда я  откладываю и не беру заказы и просто пытаюсь переключиться на какие-то свои проекты .Потому что я работаю на заказ и это очень важно и тяжело именно с точки отношения к человеку, как он хочет сделать,я к этому очень ответственно отношусь , а в своих проектах я могу эксперементировать больше с фактурами ,формами и материалами»</p>
                </div>
                <div className={classes.collage8}>
                    <div className={classes.pic8}>
                        <img src={picTile8} alt="Main image" />
                    </div>
                    <div className={classes.pic9}>
                        <img src={picTile9} alt="Main image" />
                    </div>
                </div>


                <h3>Что Вы чувствуете когда занимаетесь любимым делом ?</h3>
                <div className={classes.line}>
                    <p>« На самом деле я и медицину очень люблю и не могу сказать что вышивка это мое единственное любимое дело в жизни ,я думаю что не нужно концентрироваться на чем-то одном .Да ,я получила  образование и работала врачом ,но сейчас в данный момент своей жизни  и развития  я поняла что хочу заниматься именно творчеством,даже не то что любимым делом ,а в принципе творчеством,потому что вышивка ,что бы это кто-то замечал нужно и красиво фотографировать и преподносить ,и вести соц сети это все большая творческая и в какой-то степени не очень творческая работа .Когда я просыпаюсь утром, я понимаю,что я хочу идти в мастерскую делать это все ,ездить на встречи устраивать фотосессии ,я чувствую желание это делать.Как только оно пропадет ,наверное займусь чем-то другим.</p>
                </div>
                

                    <h3>Было приятно с вами сегодня побеседовать. Спасибо за уделенное нам время, ответы на вопросы и внимательность. Желаем творческих успехов</h3>
                    <div className={classes.endLine}>
                    </div>
                
            </div>

        </div>
    )
}

export default Embroidery;