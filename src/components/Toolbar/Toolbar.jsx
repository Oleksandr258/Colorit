import React from 'react';
import classes from './Toolbar.module.css';
import LangMenu from '../LangMenu/LangMenu';


const Toolbar = () => {
    return (

    <div className={classes.toolbar}>
<div>
<LangMenu />
</div>
        
</div>
    ) 
}

export default Toolbar;