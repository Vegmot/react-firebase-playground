import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
