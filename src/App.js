import React from 'react';


import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import MainImg from './MainImg/MainImg';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import './App.css';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">

      <div className='app-wraper'>
        <div className='app-wraper-header'>
          <Header />
        </div>
        <div className="app-social-networks">
        <SocialNetworks />
        </div>

        {/* <div className='app-navbar'>
                  <Navbar />
                </div> */}
        <div className='app-wrapper-main-img'>
          <MainImg />
         
        </div>
        <div className='app-wraper-navbar'>
          <Navbar />
        </div>
        <div>
        <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
