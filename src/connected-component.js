import React from 'react';
import { connect } from 'react-redux';

class ConnectedComponent extends React.Component {
  render() {
    return (
      <>
        <ul>
          {console.log(this.props)}
          {this.props.teams.map((team) => (
            <li> {team.name} </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStoreStateToProps = (state) => ({
  teams: state.teams,
  players: state.players,
});

export default connect(mapStoreStateToProps)(ConnectedComponent);
