import React from 'react';
import PropTypes from 'prop-types';
import redDot from '../assets/images/reddot.png'

function NavbarUsers(props) {
  return (
    <div>
      <div>
        <style jsx global>{`
          .img {
            height: 10px;
            width: 12px;
          }
          .userViewers {
            font-size: 14px;
          }
          .userInfo {
            margin-top: 5px;
          }
          .user {
            color: #B8B5C0;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
          }
          .userImage {
            margin-left: 10px;
            height: 30px;
            width: 34px;
            border-radius: 5px;
          }
          .userName {
            margin: -8px 0 -8px 0;
          }
          .playingText {
            font-size: 12px;
            font-family: sans-serif;
          }
        `}</style>
      </div>
      <div className="user">
        <div>
          <img className="userImage" src={props.image}/>
        </div>
        <div className="userInfo">
          <p className="userName">{props.name}</p>
          <p className="playingText">{props.playing}</p>
        </div>
        <div>
          <p className="userViewers"><img className="img" src={redDot}/> {props.viewers}</p>
        </div>
      </div>
    </div>
  );
}

NavbarUsers.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playing: PropTypes.string.isRequired,
  viewers: PropTypes.string.isRequired
}

export default NavbarUsers;