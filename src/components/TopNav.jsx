import React from 'react';
import logoWhite from '../assets/images/logowhite.png';
import crown from '../assets/images/crown.png';
import profileIcon from '../assets/images/profileicon.png'

function TopNav() {
  return(
    <div>
      <div>
        <style jsx global>{`
          .topnav {
            background-color: #6441A4;
            height: 50px;
            margin: -8px -8px 0 -8px;
          }
          .btn {
            background-color: transparent;
            border: none;
            color: white;
            font-size: 15px;
            margin: 15px 5px 0px 2px;
          }
          .logoWhite {
            width: 80px;
            height: 50px;
            float: left;
          }
          .searchbar {
            border-radius: 5px 5px 5px 5px;
            border: 1px solid #7B5DB1;
            height: 24px;
            background-image: url(http://www.newdesignfile.com/postpic/2012/12/search-icon-clip-art_249188.png);
            background-position: 2px 4px;
            background-repeat: no-repeat;
            background-color: #503483;
            background-size: 20px 17px;
            padding-left: 30px;
            color: white;
          }
          .crown {
            float: left;
            width: 90px;
            height: 50px;
            margin-right: -30px;
            margin-top: 10px;
          }
          .profileIcon {
            margin-top: 10px;
            width: 40px;
            height: 30px;
            float: right;
          }
          .rightSideNav {
            float: right;
            margin: -3px 0 0 0;
          }
          .login {
            border: 1px solid white;
            border-radius: 2px 2px 2px 2px;
            padding: 5px;
          }
        `}</style>
      </div>
      <nav className="topnav">
        <img className="logoWhite" src={logoWhite}/>
        <button className="btn">Discover</button>
        <button className="btn">Browse</button>
        <button className="btn">Try Prime</button>
        <button className="btn ellipses">&hellip;</button>
        <input className="searchbar" type="text"/>
        <div className="rightSideNav">
          <img className="crown" src={crown} />
          <button className="btn login">Log In</button>
          <button className="btn">Sign Up</button>
          <img className="profileIcon" src={profileIcon} />
        </div>
      </nav>
    </div>
  );
}

export default TopNav;