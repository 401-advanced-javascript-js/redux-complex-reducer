const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  // let updatedState = null;
  let teamId = null;
  let teamPlayers = null;
  let targetPlayerId = null;

  switch (type) {
    case 'PLAYER_CREATE':
      teamId = payload.teamId;
      teamPlayers = state[teamId];

      return { ...state, [teamId]: [...teamPlayers, payload] };
    case 'PLAYER_UPDATE':
      targetPlayerId = payload.id;
      teamId = payload.teamId;
      teamPlayers = state[teamId];

      return { ...state, [teamId]: teamPlayers.map((player) => (player.id === targetPlayerId ? payload : player)) };
    case 'PLAYER_DELETE':
      targetPlayerId = payload.id;
      teamId = payload.teamId;
      teamPlayers = state[teamId];

      return {
        ...state,
        [teamId]: teamPlayers.filter((player) => player.id !== targetPlayerId),
      };
    default:
      return state;
  }
};
