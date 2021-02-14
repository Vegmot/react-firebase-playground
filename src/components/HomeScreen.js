import React from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../config/firebase';

const HomeScreen = () => {
  return (
    <div className='home-page'>
      <p>
        Go to <Link to='/login'>Login</Link> page to login
      </p>

      <p>
        Go to <Link to='/register'>Register</Link> page to register
      </p>

      <div className='container'>
        <div className='red-box'>
          <div className='box-in-a-box red'></div>
        </div>

        <div className='green-box'>
          <div className='box-in-a-box green'></div>
        </div>

        <div className='blue-box'>
          <div className='box-in-a-box blue'></div>
        </div>

        <div className='yellow-box'>
          <div className='box-in-a-box yellow'></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
