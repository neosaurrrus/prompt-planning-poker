import React from 'react';
import './App.css';
import PlansContainer from './containers/PlansContainer'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Prompt Planning Poker</h1>
        <PlansContainer />
      </header>

    </div>
  );
}

export default App;
