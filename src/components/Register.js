import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';

const Register = () => {
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
      <div className='signup-page'>
        <form className='signup-form' onSubmit={submitHandler}>
          <div className='signup-email'>
            <label>Email: </label>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Enter email...'
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='signup-password'>
            <label>Password: </label>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Enter password...'
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className='signup-submit'>
            <button type='submit' className='signup-button'>
              Register
            </button>
          </div>

          <div className='to-login-from-register'>
            <p>
              Have an account? <Link to='/login'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
