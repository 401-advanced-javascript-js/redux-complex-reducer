import React from 'react';
import './App.css';
import ConnectedComponent from './connected-component';

function App() {
  return (
    <div className="App">
      <p>Welcome to this amazing complex reducer react-redux application.</p>
      <p>
        To test teams:
        <br />
        <strong>TEAM_CREATE</strong> => payload must have id
        <br />
        <strong>TEAM_UPDATE</strong> => payload must have id
        <br />
        <strong>TEAM_DELETE</strong> => payload must have id
      </p>
      <p>
        To test players:
        <br />
        <strong>PLAYER_CREATE</strong> => payload must have id and teamId
        <br />
        <strong>PLAYER_UPDATE</strong> => payload must have id and teamId
        <br />
        <strong>PLAYER_DELETE</strong> => payload must have id and teamId
      </p>

      <ConnectedComponent />
    </div>
  );
}

export default App;
