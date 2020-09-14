import React from 'react';
import '../styles/style.scss';

import Rules from './Rules.js'
import UserChose from './UserChose'
import ZoomMassege from './zoom-Massege'




function App() {
  return (
    <div className="App">
      


        <UserChose />

        <Rules />

        <ZoomMassege />

    </div>
  );
}

export default App;
