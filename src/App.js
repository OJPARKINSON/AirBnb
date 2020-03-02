import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './pages/user';
import Home from './pages/home';
import newUser from './pages/newUser';
import './App.css';
import Property from './pages/property';
import Profile from './pages/profile';
import Login from './pages/components/login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/newUser" component={newUser} />
        <Route path="/property/:property" component={Property} />
        <Route path="/user/:id" component={User} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />x
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
