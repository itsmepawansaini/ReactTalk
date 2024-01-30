import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Chat from './Chat';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chat />
    </div>
  );
};

export default Sidebar;
