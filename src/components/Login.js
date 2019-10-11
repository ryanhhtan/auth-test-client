import React, {useState} from 'react';
import {login} from '../services/AuthService';

export const Login =() => { 
  const useFormInput = initValue => {
    const [value, setValue] = useState(initValue);
    const handleChange = e => setValue(e.target.value);
    return {
      value,
      onChange: handleChange
    };
  }

  const email = useFormInput('');
  const password = useFormInput('');

  const handleLogin = () => {
    if (email.value === '') {
      console.log("email cannot be empty");
      return;
    }
    if (password.value === '') {
      console.log("password cannot be empty");
      return;
    }
    login(email.value, password.value);
  }
  
  return (
    <div>
      <h1>Login</h1>
        <input type="email" placeholder="Email" {...email}/>
        <input type="password" placeholder="Password" {...password}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  );
}
