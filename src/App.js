import React from 'react';


import Toolbar from './components/Toolbar/Toolbar';
import Navbar from './components/Navbar/Navbar';
import MainImg from './components/MainImg/MainImg';

import './App.css';
import Content from './components/Content/Content';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {

  return (
    <div style={{ height: '100%' }}>
      <div className="App" >

        <div className='app-wraper'>
        
          <div className='app-wraper-header'>
            <Toolbar />
          </div>
          <div>
          <SideDrawer />
          <Backdrop />
          </div>
          {/* <div className="app-social-networks">
        <SocialNetworks />
        </div> */}

          {/* <div className='app-navbar'>
                  <Navbar />
                </div> */}
          <div className='app-wrapper-main-img'>
            <MainImg  />

          </div>
          <div className='app-wraper-navbar'>
            <Navbar />
          </div>
          <div>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
              
          
}

export default App;
