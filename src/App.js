import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

//Components

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navigation/>
          <div className="content">
            <Route exact path='/' component={Home}/>
            <Route path='login' component={Login}/>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
