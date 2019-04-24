import React from 'react';
import live from '../assets/images/liveimage.png'
import NavbarUsers from './NavbarUsers';

let popularChannelUsers = [
  {
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png',
    name: 'shroud',
    playing: 'PLAYERUNKNOWN...',
    viewers: '36,297'
  },
  {
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7a75bd89-ecbf-4974-bc1f-6b967213595f-profile_image-70x70.png',
    name: 'LIRIK',
    playing: 'Grand Theft Auto V',
    viewers: '26,003'
  },
  {
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-70x70.jpeg',
    name: 'xQcOW',
    playing: 'Fortnite',
    viewers: '18,922'
  },
  {
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/maximilian_dood-profile_image-c6e12e1798861491-70x70.png',
    name: 'Maximilian_D',
    playing: 'Mortal Kombat 11',
    viewers: '14,595'
  },
  {
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/fbeddfec-0974-4adf-ac94-70161310aff5-profile_image-70x70.png',
    name: 'OGADotaPIT',
    playing: 'Dota 2',
    viewers: '18,005'
  },
  {
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/sodapoppin-profile_image-10049b6200f90c14-70x70.png',
    name: 'sodapoppin',
    playing: 'World of Warcraft',
    viewers: '21,728'
  }
];
function Sidenav() {
  return(
    <div>
      <style jsx>{`
        .sidenav {
          width: 239px;
          background-color: #19171C;
          height: 838px;
          margin-left: -8px;
        }
        .joinTwitch {
          width: 219px;
          height: 259px;
          background-color: #2C2541;
          margin-left: 10px;
          border-radius: 10px 10px 10px 10px;
        }
        .liveImage {
          margin-left: 10px;
        }
        .joinText {
          text-align: center;
          color: white;
          font-size: 16px;
          font-family: sans-serif;
          margin-top: 3px;
        }
        .discoverText {
          color: #898395;
          text-align: center;
          font-family: sans-serif;
          font-size: 14px;
          margin-top: -13px;
        }
        .signupBtn {
          color: white;
          background-color: #6441A4;
          margin: 0px 75px 0px 67px;
          border: none;
          width: 79px;
          height: 36px;
          font-size: 12px;
          border-radius: 5px 5px 5px 5px;
        }
        .popularChannels {
          margin-top: 30px;
        }
        .popularChannelsText {
          color: #B8B5C0;
          font-size: 14px;
          font-family: sans-serif;
          font-weight: lighter;
          margin-left: 10px;
        }
        hr {
          width: 219px;
          border: none;
          height: 1px;
          background-color: #252328;
        }
      `}</style>
      <div className="sidenav">
      <br/>
        <div className="joinTwitch">
          <img className="liveImage" src={live}/>
          <p className="joinText">Join the Twitch community!</p>
          <p className="discoverText">Discover the best live streams anywhere.</p>
          <button className="signupBtn">Sign Up</button>
        </div>
        <div className="popularChannels">
          <h3 className="popularChannelsText">Popular Channels</h3>
          <hr/>
          {popularChannelUsers.map((user, index) =>
            <NavbarUsers image={user.image}
              name={user.name}
              playing={user.playing}
              viewers={user.viewers}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidenav;