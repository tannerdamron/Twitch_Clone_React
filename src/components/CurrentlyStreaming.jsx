import React from 'react'
import triangle from '../assets/images/squaretriangle.png';
import crown from '../assets/images/crown.png';

function CurrentlyStreaming() {
  return(
    <div>
      <div>
        <style jsx global>{`
          .twitchPrime {
            width: 1665px;
            height: 45px;
            background-color: #0E9BD8;
          }
          .triangle {
            width: 60px;
            height: 30px;
            margin-top: 10px;
            margin-left: -370px;
          }
          .crown {
            width: 90px;
            height: 50px;
            margin-left: 300px;
          }
          .primeText {
            margin-top: -26px;
            font-family: sans-serif;
            font-size: 14px;
          }
          .underline {
            text-decoration: underline;
            margin-right: 10px;
          }
          .underlineTrial {
            text-decoration: underline;
            margin-left: 50px;
          }
        `}</style>
      </div>
        <div className="twitchPrime">
          <img className="triangle" src={triangle} />
          <img className="crown" src={crown} />
        <p className="primeText"><span className="underline">Twitch Prime</span> Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.<span className="underlineTrial">Start Your Free Trial</span></p>
        </div>
    </div>
  );
}

export default CurrentlyStreaming;