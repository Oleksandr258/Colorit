import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Navbar from './components/Navbar/Navbar';
import MainImg from './components/MainImg/MainImg';
import './App.css';
import Content from './components/Content/Content';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
  Link
} from "react-router-dom";
import ArtNews from './components/Pages/ArtNews/ArtNews';
import InterviewWithBeginner from './components/Pages/InterviewWithBeginner/InterviewWithBeginner';
import Advices from './components/Pages/Advices/Advices';
import InspirationSpaces from './components/Pages/InspirationSpaces/InspirationSpaces';
import ArtistsSculptors from './components/Pages/ArtistsSculptors/ArtistsSculptors';
import NewsOfTheDay from './components/Pages/NewsOfTheDay/NewsOfTheDay';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Blagaj from './components/Articles/Blagaj/Blagaj';
import Embroidery from './components/Articles/Embroidery/Embroidery';
import CreativePerson from './components/Pages/CreativePerson/CreativePerson';
import Artdiscover from './components/Pages/ArtDiscover/ArtDiscover';
import DigitalArt from './components/Articles/DigitalArt/DigitalArt';
import NewAbstractionist from './components/Articles/NewAbstractionist/NewAbstractionist';
import Competition1 from './components/Articles/Competition/Competition1';
import Competition2 from './components/Articles/Competition/Competition2';
import Photographers from './components/Articles/Photographers/Photographers';


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleCklickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler} />
    }



    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div style={{ height: '100%' }}>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className="App" >

            <div className='app-wraper'>

              <div className='app-wraper-header'>
                <Toolbar />
              </div>
              <div>

              </div>

              <div className='app-wrapper-main-img'>
                <MainImg drawerCklickHandler={this.drawerToggleCklickHandler} />

              </div>

              <div className='app-wraper-navbar'>
                <Navbar />
              </div>
              <div className='app-wrappet-content-main'>

                <Router>
                  <Switch>
                    <Route path="/inspirationspaces/blagaj" component={Blagaj} />
                    <Route path="/" exact component={Content} />
                    <Route path="/artnews" component={ArtNews} />
                    <Route path="/interviewwithbeginner" component={InterviewWithBeginner} />
                    <Route path="/advices" component={Advices} />
                    <Route path="/inspirationspaces" component={InspirationSpaces} />
                    <Route path="/artistssculptors" component={ArtistsSculptors} />
                    <Route path="/newsoftheday" component={NewsOfTheDay} />
                    <Route path="/creativeperson" component={CreativePerson} />
                    <Route path="/artdiscover" component={Artdiscover} />
                    <Route path="/embroidery" component={Embroidery} />
                    <Route path="/newabstractionist" component={NewAbstractionist} />
                    <Route path="/digitalart" component={DigitalArt} />
                    <Route path="/competition1" component={Competition1} />
                    <Route path="/competition2" component={Competition2} />
                    <Route path="/photographers" component={Photographers} />

                    
                    <Redirect from='/' to='/home' />
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
