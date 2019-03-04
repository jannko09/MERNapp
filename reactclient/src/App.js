import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch, /*Redirect Link NavLink*/ } from 'react-router-dom';
import Contact from './Components/Contact';
import NotFound from './Components/NofFound';
import LogIn from './Components/LogIn';
import SignUp from './Components/Signup';
import withAuth from './Components/withAuth';
import Goo from './Components/Logout';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">       
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={LogIn} />
              <Route path="/signup" component={SignUp} />

              {/*ON SUCCESFUL AUTH REDIRECT TO HOME COMPONENT*/}
              <Route path="/home" component={withAuth (Home)} />
              
              <Route path="/contact" component={Contact} />
              <Route path="/logout" component={Goo} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
