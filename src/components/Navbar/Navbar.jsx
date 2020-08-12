import React from 'react';
import classes from './Navbar.module.css';




const Navbar = () => {
    return (
        <nav>

            <div className={classes.navbarWrapper}>
                <div className={classes.navbarItems}>
                    
                    <ul>
            <li><a href="/">ГЛАВНАЯ</a></li>
            <li><a href="/interviewwithbeginner">РУБРИКА "ИНТЕРВЬЮ У НАЧИНАЮЩЕГО"</a></li>
            <li><a href="/artnews">НОВОСТИ ИСКУССТВА</a></li>
            <li><a href="/advices">СОВЕТЫ</a></li>
            <li><a href="/inspirationspaces">МЕСТА ДЛЯ ВДОХНОВЕНИЯ</a></li>
            <li><a href="/artistssculptors">ХУДОЖНИКИ СКУЛЬПТОРЫ</a></li>
            <li><a href="/newsoftheday">НОВОСТЬ ДНЯ</a></li>
        </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;