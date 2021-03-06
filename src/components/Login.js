import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';

const Login = ({ history }) => {
  // credentials registered
  // fbtest@test.com / 123456

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      setEmail('');
      setPassword('');
    });
  };

  return (
    <>
      <div className='login-page'>
        <form className='login-form' onSubmit={submitHandler}>
          <div className='login-email'>
            <label>Email: </label>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Enter email...'
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='login-password'>
            <label>Password: </label>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Enter password...'
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className='login-submit'>
            <button type='submit' className='login-button'>
              Login
            </button>
          </div>

          <div className='to-register-from-login'>
            <p>
              Don't have account? <Link to='/register'>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
