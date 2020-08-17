import React from 'react';
import  './SideDrawer.css';

const sideDrawer = props => {
   let drawerClasses = 'sideDrawer';
   if (props.show) {
       drawerClasses = "sideDrawer open";
   }
   return (
   <nav className={drawerClasses}>
        <ul>
            <li><a href="/">ГЛАВНАЯ</a></li>
            <li><a href="/interviewwithbeginner">РУБРИКА "ИНТЕРВЬЮ У НАЧИНАЮЩЕГО"</a></li>
            <li><a href="/artnews">НОВОСТИ ИСКУССТВА</a></li>
            <li><a href="/advices">СОВЕТЫ</a></li>
            <li><a href="/inspirationspaces">МЕСТА ДЛЯ ВДОХНОВЕНИЯ</a></li>
            <li><a href="/artistssculptors">ХУДОЖНИКИ СКУЛЬПТОРЫ</a></li>
            <li><a href="/newsoftheday">НОВОСТЬ ДНЯ</a></li>
            <li><a href="/creativeperson">ИНТЕРВЬЮ У ТВОРЧЕСКОГО ЧЕЛОВЕКА</a></li>
            <li><a href="/artdiscover">ОТКРЫТИЕ ИСКУССТВА</a></li>

        </ul>
    </nav>);
};

export default sideDrawer;