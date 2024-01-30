import React from 'react';
import Avatar from '../assets/images/img.png';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Search...' />
      </div>
      <div className="userChat">
        <img src={Avatar} />
        <div className="userChatInfo">
          <sapn>Pawan</sapn>
        </div>
      </div>
    </div>
  );
};

export default Search;
