import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

//Components

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Sign-Up/SignUp';
import CreatePost from './components/Create-Post/CreatePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navigation/>
          <div className="content d-flex justify-content-center">
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create-post' component={CreatePost}/>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
