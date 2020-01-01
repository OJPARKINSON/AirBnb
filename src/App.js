import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './pages/user'
import Home from './pages/home'
import newUser from './pages/newUser'
import './App.css';
import Property from './pages/property';
import Login from './pages/components/login';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/newUser" component={newUser} />
        <Route path="/property/:property" component={Property} />
        <Route path="/user/" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
 