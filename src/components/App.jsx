import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Sidenav from './Sidenav'
import CurrentlyStreaming from './CurrentlyStreaming';
import PopularLive from './PopularLive';

function App() {
  return(
    <div>
      <div>
        <style jsx global>{`
        .bodyContent {
          display: grid;
          grid-template-columns: 1fr 6fr;
        }
        .fixed {
          position: fixed;
        }
        .pageContent {
          margin-left: 231px
        }
        `}</style>
      </div>
      <div>
        {/* <div className="fixed"> */}
          <TopNav/>
        {/* </div> */}
        <div className="bodyContent">
          <div className="fixed">
            <Sidenav/>
          </div>
          <div className="pageContent">
          <CurrentlyStreaming />
          <PopularLive/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;