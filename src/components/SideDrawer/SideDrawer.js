import React from 'react';
import  './SideDrawer.css';

import Navbar from '../Navbar/Navbar';

const sideDrawer = (props) => {
    
    
    let drawerClasses = 'sideDrawer';
   if (props.show) {
       drawerClasses = "sideDrawer open";
   }
   
   return (
   <nav className={drawerClasses}>
       <Navbar />
       
    </nav>);
};

export default sideDrawer;