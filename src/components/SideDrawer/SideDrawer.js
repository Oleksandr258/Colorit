import React from 'react';
import classes from './SideDrawer.module.css';

const sideDrawer = props => (
    <nav className={classes.sideDrawer}>
        <ul>
            <li><a href="/">ГЛАВНАЯ</a></li>
            <li><a href="/">РУБРИКА "ИНТЕРВЬЮ У НАЧИНАЮЩЕГО"</a></li>
            <li><a href="/">НОВОСТИ ИСКУССТВА</a></li>
            <li><a href="/">СОВЕТЫ</a></li>
            <li><a href="/">МЕСТА ДЛЯ ВДОХНОВЕНИЯ</a></li>
            <li><a href="/">ХУДОЖНИКИ СКУЛЬПТОРЫ</a></li>
            <li><a href="/">НОВОСТЬ ДНЯ</a></li>
        </ul>
    </nav>
);

export default sideDrawer;