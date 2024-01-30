import React from 'react';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ReactTalk</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="submit" className="submit"></input>
        </form>
        <p>Don&apos;t Have an Account? Register</p>
      </div>
    </div>
  );
};

export default Login;
