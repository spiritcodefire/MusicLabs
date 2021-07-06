import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import ContextProvider from './hooks/ContextProvider' ;
import NavBar from './components/NavBar' ;
import NavBarArtist from './components/APages/InterfaceArtist/NavBarArtist' ;
import Home from './components/APages/Home' ;
import FundArtist from './components/APages/FundArtist' ;

import library from './components/APages/Library' ;
import Signup from './components/APages/SignUp/index' ;
import AdminArtist from './components/APages/AdminArtist' ;
import Footer from './components/Footer' ;

import LaunchBig from './components/LaunchBig' ;
import AirDropBig from './components/AirDropBig' ;
import LibraireBig from './components/LibrairieBig' ;
import TeteDafficheBig from './components/TeteDafficheBig' ;
import CountDown from './components/CountDown/CountDownMega' ;
import Create from './components/APages/CreateNft/CreateNft'
import CreateSingle from './components/CreateAll/Single'
import CreateAlbum from './components/CreateAll/Album'
import Artist from './components/APages/Artist/index'

import Royalties from './components/APages/InterfaceArtist/Royalties/Royalties'
import MyFans from './components/APages/InterfaceArtist/MyFans/MyFans'
import Crowdfunding from './components/APages/InterfaceArtist/Crowdfunding/Crowdfunding'
import Charity from './components/APages/InterfaceArtist/Charity/Charity'
import MyPlaylist from './components/APages/MyItems/MyPlaylist'
import MyItems from './components/APages/MyItems/Index'
import Verified from './components/APages/Verified/Index'


function App() {

  return (
  <Fragment>
    <ContextProvider>
      <BrowserRouter>

        {/* NE SAFFICHERA QUE SI CONTEXT.NAVBAR EST TRUE */}
        <NavBar />
        
        {/* NE SAFFICHERA QUE SI CONTEXT.NAVBAR EST FALSE */}
        <NavBarArtist />

        <Switch>
          
          <Route path="/" exact component={Home}/>

          <Route path="/FundArtist" exact component={FundArtist}/>
          <Route path="/library" exact component={library}/>
          
          <Route path="/AdminArtist" exact component={AdminArtist}/>
          <Route path="/CountDown" exact component={CountDown}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/Playlist" exact component={MyPlaylist}/>
          <Route path="/artist" exact component={Artist}/>
          <Route path="/Signup" exact component={Signup}/>

          <Route path="/interfaceArtist" exact component={CreateSingle}/>
          <Route path="/Royalties" exact component={Royalties}/>
          <Route path="/MyFans" exact component={MyFans}/>
          
          <Route path="/createalbum" exact component={CreateAlbum}/>
          <Route path="/Crowdfunding" exact component={Crowdfunding}/>
          <Route path="/Charity" exact component={Charity}/>
          <Route path="/Items" exact component={MyItems}/>
          <Route path="/verified" exact component={Verified}/>

          <Route path="/airdrop/:id" exact component={AirDropBig}/>
          <Route path="/librairie/:id" exact component={LibraireBig}/>
          <Route path="/tetedaffiche/:id" exact component={TeteDafficheBig}/>
          <Route path="/Launch/:id" exact component={LaunchBig}/>

        </Switch>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  </Fragment>
  );
}




export default App;
