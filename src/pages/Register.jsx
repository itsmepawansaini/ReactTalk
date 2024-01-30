import React from 'react';
import AddImg from '../assets/images/addAvatar.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ReactTalk</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Full Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input style={{ display: 'none' }}     type="file" placeholder="Profile Image"></input>
          <label htmlFor="file" id="file">
            <img src={AddImg} />
            <span>Add an Avatar</span>
          </label>
          <input type="submit" className="submit"></input>
        </form>
        <p>Already Have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
