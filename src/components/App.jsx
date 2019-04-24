import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Sidenav from './Sidenav'

function App() {
  return(
    <div>
      <div>
        <style jsx global>{`
        `}</style>
      </div>
      <div>
        <TopNav/>
        <Sidenav/>
      </div>
    </div>
  );
}
export default App;