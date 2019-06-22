import React from 'react';
import './App.css';
import {Header} from './components/Header';


const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>X</button>
      {props.name}
    </span>
    <Counter/>
  </div>
);

class Counter extends React.Component {
  constructor(){
    super(); // 부모의 모든 것을 초기화해주어야하기 때문..
    this.state = {
      score: 0,
      time: 10
    };
    // this.incrementScore = this.incrementScore.bind(this);
  }

  // 애로우펑션안의 this는 lexical this로써 자기자신을 가리키게 된다.
  handleScore = (delta) => {
    console.log('increment:', this);
    // this.state.score += 1; // 이렇게만 하면 화면에 증가된 값이 보이지 않는다.
    // setState를 호출해야만 UI 랜더링이 된다. 가장 일반적 형태
    // this.setState({score: this.state.score + 1}); 이 방법이 아니어도 콜백함수로
    this.setState(prevState => { // 이 방법이 좀더 정확한 코딩
      return {score:prevState.score+=delta};
    })
  };
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick = {()=>this.handleScore(-1)}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick = {()=>this.handleScore(1)}> +</button>
      </div>)
  }
}

class App extends React.Component{
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    console.log('remove player:', id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <marquee>
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map(player => (
            <Player name={player.name} id={player.id} key={player.id}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
      </marquee>
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
