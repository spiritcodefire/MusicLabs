import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignInFB from "./components/APages/SignIn"
import ContextProvider from './hooks/ContextProvider'
import NavBar from './components/NavBar'
import Home from './components/APages/Home'
import FundArtist from './components/APages/FundArtist'

import library from './components/APages/Library'
import Signin from './components/APages/SignIn'
import Signup from './components/APages/SignUp'
import AdminArtist from './components/APages/AdminArtist'
import Footer from './components/Footer'

import LaunchBig from './components/LaunchBig'
import AirDropBig from './components/AirDropBig'
import LibraireBig from './components/LibrairieBig'
import TeteDafficheBig from './components/TeteDafficheBig'
import CountDown from './components/CountDown/CountDownMega'


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
          <Route path="/Artist" exact component={Signin}/>
          <Route path="/Signup" exact component={Signup}/>
          <Route path="/AdminArtist" exact component={AdminArtist}/>
          <Route path="/CountDown" exact component={CountDown}/>

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
