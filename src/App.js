import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";






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
