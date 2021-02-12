import React from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../config/firebase';

const HomeScreen = () => {
  const user = auth.user;

  return user ? (
    <>
      <h1>You are logged in!</h1>
    </>
  ) : (
    <>
      Go to <Link to='/login'>Login</Link> page to login
    </>
  );
};

export default HomeScreen;
