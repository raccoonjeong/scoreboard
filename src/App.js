import React from 'react';
import './App.css';
import Header from './components/Header';
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component{
  maxId = 4;

  state = {
    players: [
      {name: 'LDK', id: 1, score: 0},
      {name: 'HONG', id: 2, score: 0},
      {name: 'KIM', id: 3, score: 0},
      {name: 'PARK', id: 4, score: 0},
    ]
  };

  handleRemovePlayer = (id) => {
    console.log('remove player:', id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  };

  /**
   * 스코어를 변경시키는 함수
   * @param id : 플레이어 아이디
   * @param delta : 증가면 1, 감소면 -1
   */
  handleChangeScore = (id, delta) => {
    console.log('change score', id, delta);

    this.setState(prevState => {
      prevState.players.forEach(player => {
        if(player.id === id) {
          player.score += delta;
        }
      })
      return {players: [...prevState.players]} // 새 바구니를 가져와서 기존 바구니 내용을 넣는다. 딥카피
    })
  };
  handleAddPlayer = (name) => {
    console.log('add player name: ', name);
    this.setState(prevState => {
      prevState.players.push({
        name, // 키 밸류 같으면 한쪽 생략 가능
        id: ++this.maxId,
        score: 0
      });
      return {
        players: [...prevState.players]
      }
    })
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}/>
        {
          this.state.players.map(player => (
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <marquee><h1>ㅇㅅㅇ</h1></marquee>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
