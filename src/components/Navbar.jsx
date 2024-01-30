import React from 'react';
import Avatar from '../assets/images/img.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">React Talk</span>
      <div className="user">
        <img src={Avatar} alt="" />
        <span>Pawan</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
