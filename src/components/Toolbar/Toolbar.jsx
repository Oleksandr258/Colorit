import React from 'react';
import classes from './Toolbar.module.css';
import LangMenu from '../LangMenu/LangMenu';


const Toolbar = (props) => {
    return (

    <div className={classes.toolbar}>
<div className={classes.langMenuWrapper}>
<LangMenu />
</div>
        
</div>
    ) 
}

export default Toolbar;