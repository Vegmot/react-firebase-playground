import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
