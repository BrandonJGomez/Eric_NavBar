import React from 'react';

import SearchBar from './SearchBar.jsx';
import Actions from './Actions.jsx';
import BottomNav from './BottomNavBar.jsx';

const CentralNav = ({ lowerNav, activeCategory, changeActive }) => (
  <div className="navBarWrapper">
    <div className="navBar">
      <div className="navImage">
        <img
          src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg"
          alt="Go to REI.com Home Page"
        />
      </div>

      <div className="navBarRight">
        <div className="navBarRightUpper">
          <SearchBar />
          <Actions />
        </div>
        <hr className="middleRule" />
        <BottomNav
          list={lowerNav}
          classType={'bottomNavItems'}
          activeCategory={activeCategory}
          changeActive={changeActive}
        />
      </div>
    </div>
  </div>
);

module.exports = CentralNav;
