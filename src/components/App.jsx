import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Sidenav from './Sidenav'
import CurrentlyStreaming from './CurrentlyStreaming';

function App() {
  return(
    <div>
      <div>
        <style jsx global>{`
        .bodyContent {
          display: grid;
          grid-template-columns: 1fr 6fr;
        }
        `}</style>
      </div>
      <div>
        <TopNav/>
        <div className="bodyContent">
          <div>
          <Sidenav />
          </div>
          <div>
          <CurrentlyStreaming />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;