import React from 'react';
import "./index.scss";

export default function LogIn() {
  return (
    <div className='login_container'>
      <from>
        <h2>Login</h2>
        <label htmlFor="login_email">
          <input type="text" />
        </label>
        <label htmlFor="login_password">
          <input type="text" />
        </label>
      </from>
    </div>
  )
}
