import React from 'react';
import './LoginForm.styles.css';

const LoginForm = () =>(
 <React.Fragment>
 <label for ="username">Username</label>
 <input  type='text' id='username'/>
 <label for="password">Password</label>
 <input type='password' id="password" />
 <input type='submit' value='submit' className='submit' />
  </React.Fragment>
)

export default LoginForm;