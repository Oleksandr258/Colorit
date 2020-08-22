import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Navbar from "./components/Navbar/Navbar";
import MainImg from "./components/MainImg/MainImg";
import "./App.css";
import Content from "./components/Content/Content";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ArtNews from "./components/Pages/ArtNews/ArtNews";
import InterviewWithBeginner from "./components/Pages/InterviewWithBeginner/InterviewWithBeginner";
import Advices from "./components/Pages/Advices/Advices";
import InspirationSpaces from "./components/Pages/InspirationSpaces/InspirationSpaces";
import ArtistsSculptors from "./components/Pages/ArtistsSculptors/ArtistsSculptors";
import NewsOfTheDay from "./components/Pages/NewsOfTheDay/NewsOfTheDay";
import { BrowserRouter } from "react-router-dom";
import Blagaj from "./components/Articles/Blagaj/Blagaj";
import Embroidery from "./components/Articles/Embroidery/Embroidery";
import CreativePerson from "./components/Pages/CreativePerson/CreativePerson";
import Artdiscover from "./components/Pages/ArtDiscover/ArtDiscover";
import DigitalArt from "./components/Articles/DigitalArt/DigitalArt";
import NewAbstractionist from "./components/Articles/NewAbstractionist/NewAbstractionist";
import Competition1 from "./components/Articles/Competition/Competition1";
import Competition2 from "./components/Articles/Competition/Competition2";
import Photographers from "./components/Articles/Photographers/Photographers";
import { createBrowserHistory } from "history";
import i18n from './i18n/i18n';
export const history = createBrowserHistory();



class App extends Component {

  state = {
    sideDrawerOpen: false,
  };

  drawerToggleCklickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  // handleClick = (lang) => {
  //   i18n.changeLanguage(lang);
  //   return {
  //     lang: (lang) => {
  //       lang
  //     },
  //   };
  // }

  render() {
    let backdrop;
    
   
    
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <div style={{ height: "100%" }}>
        
          <SideDrawer show={this.state.sideDrawerOpen} click2={this.drawerToggleCklickHandler} />
          {backdrop}
         
          <div className="App">
            <div className="app-wraper">
              <div className="app-wraper-header">
                <Toolbar />
              </div>
              <div></div>

              <div className="app-wrapper-main-img">
                <MainImg drawerCklickHandler={this.drawerToggleCklickHandler} />
              </div>

              <div className="app-wraper-navbar">
                <Navbar />
              </div>
              <div className="app-wrappet-content-main">
                {/* <Router> */}
                {/* <Switch> */}
                <Route path="/blagaj" render={() => <Blagaj />} />

                <Route path="/" exact render={() => <Content />} />
                <Route path="/artnews" render={() => <ArtNews />} />
                <Route path="/interviewwithbeginner" render={() => <InterviewWithBeginner />} />

                <Route path="/advices" render={() => <Advices />} />
                <Route path="/inspirationspaces" render={() => <InspirationSpaces />} />

                <Route path="/artistssculptors" render={() => <ArtistsSculptors />} />

                <Route path="/newsoftheday" render={() => <NewsOfTheDay />} />
                <Route path="/creativeperson" render={() => <CreativePerson />} />
                <Route path="/artdiscover" render={() => <Artdiscover />} />
                <Route path="/embroidery" render={() => <Embroidery />} />
                <Route path="/newabstractionist" render={() => <NewAbstractionist />} />
                <Route path="/digitalart" render={() => <DigitalArt />} />
                <Route path="/competition1" render={() => <Competition1 />} />
                <Route path="/competition2" render={() => <Competition2 />} />
                <Route path="/photographers" render={() => <Photographers />} />


                {/* </Switch>
                </Router> */}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
