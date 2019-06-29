// 순서1

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
  return state;
};