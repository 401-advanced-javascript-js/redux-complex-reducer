export default (state = [], { type, payload }) => {
  switch (type) {
    case 'TEAM_CREATE':
      return [...state, payload];
    case 'TEAM_UPDATE':
      return state.map((team) => (team.id === payload.id ? payload : team));
    case 'TEAM_DELETE':
      return state.filter((team) => team.id !== payload.id);
    default:
      return state;
  }
};
