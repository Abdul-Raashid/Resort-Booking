import React from 'react';
import './App.css';
import SignUp from './SignUp'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import background from "./photo.jpg";

import { BrowserRouter as Router, Switch} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
     
        <SignUp /> 
        <Header />
        
        <Switch>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route exact path='/welcome' element={<Home/>} />
          <Home />
          
        </Switch>

       
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
