import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import ContextProvider from './hooks/ContextProvider' ;
import NavBar from './components/NavBar' ;
import Home from './components/APages/Home' ;
import FundArtist from './components/APages/FundArtist' ;

import library from './components/APages/Library' ;
import Signin from './components/KoComponent/SignInKO' ;
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
import interfaceArtist from './components/APages/InterfaceArtist/index'


function App() {

  return (
  <Fragment>
    <ContextProvider>
      <BrowserRouter>
        <NavBar />

        <Switch>
          
          <Route path="/" exact component={Home}/>

          <Route path="/FundArtist" exact component={FundArtist}/>
          <Route path="/library" exact component={library}/>
          {/* <Route path="/Artist" exact component={Signin}/> */}
          
          <Route path="/AdminArtist" exact component={AdminArtist}/>
          <Route path="/CountDown" exact component={CountDown}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/createsingle" exact component={CreateSingle}/>
          <Route path="/createalbum" exact component={CreateAlbum}/>
          <Route path="/artist" exact component={Artist}/>
          <Route path="/Signup" exact component={Signup}/>
          <Route path="/interfaceArtist" exact component={interfaceArtist}/>

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
