// 순서1
import {CHANGE_SCORE, UPDATE_USER} from "../actionTypes";

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
    case UPDATE_USER:
      state.players.push({
        name: action.name,
        id: ++ maxId,
        score: 0
      });
      return {
        ...state,
        players: [...state.players]
      };
    case CHANGE_SCORE:
      state.players.forEach(player => {
        if(player.id === action.id) {
          player.score += action.delta;
        }
      });
      return { // 기존 state를 딥카피
        ...state, // 기존 state도 그대로 같이 return 되어야하기때문
        players: [...state.players]
      };
    default:
      return state;
  }
};