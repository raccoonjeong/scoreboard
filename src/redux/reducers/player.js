// 순서1
let maxId = 4;

const playerInitiialState = {
  title: 'My Scoreboardd',
  players: [
    {name: 'LDK', id: 1, score: 0},
    {name: 'HONG', id: 2, score: 0},
    {name: 'KIM', id: 3, score: 0},
    {name: 'PARK', id: 4, score: 0},
  ]
}

export const playerReducer = (state = playerInitiialState, action) => {
  switch(action.type) {
    case'UPDATE_USER':
      state.players.push({
        name: action.name,
        id: ++ maxId,
        score: 0
      });
      return {
        ...state,
        players: [...state.players]
      };
    default:
      return state;
  }
};