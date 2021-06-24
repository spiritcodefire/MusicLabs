import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignInFB from "./components/APages/SignIn"
import ContextProvider from './hooks/ContextProvider'
import NavBar from './components/NavBar'
import Home from './components/APages/Home'
import FundArtist from './components/APages/FundArtist'
import Launch from './components/APages/Launch'
import library from './components/APages/Library'
import Signin from './components/APages/SignIn'
import Signup from './components/APages/SignUp'
import AdminArtist from './components/APages/AdminArtist'
import Footer from './components/Footer'

function App() {

  return (
  <Fragment>
    <ContextProvider>
      <BrowserRouter>
        <NavBar />

        <Switch>
          
          <Route path="/" exact component={Home}/>
          <Route path="/FundArtist" exact component={FundArtist}/>
          <Route path="/Launch" exact component={Launch}/>
          <Route path="/library" exact component={library}/>
          <Route path="/Artist" exact component={Signin}/>
          <Route path="/Signup" exact component={Signup}/>
          <Route path="/AdminArtist" exact component={AdminArtist}/>

        </Switch>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  </Fragment>
  );
}




export default App;
