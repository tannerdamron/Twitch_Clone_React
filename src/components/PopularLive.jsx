import React from 'react';

function PopularLive() {
  return(
    <div>
      <div>
        <style jsx global>{`
          .liveText {
            margin-left: 20px;
            font-family: sans-serif;
            font-weight: lighter;
          }
          .bold {
            font-weight: bold;
          }
          .videos {
            margin-left: 20px;
            border-radius: 20px;
          }
        `}</style>
      </div>
      <div>
        <h4 className="liveText">Popular <span className="bold">live channels</span></h4>
        <div className="videos">
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>

          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
          <iframe className="videos"
            src="https://player.twitch.tv/?video=v413107188"
            height="250px"
            width="370px">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default PopularLive;