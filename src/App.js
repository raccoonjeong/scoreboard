import React from 'react';
import './App.css';
import Header from './components/Header';
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";


class App extends React.Component{
  maxId = 4;

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
        <Header players={this.props.players}/>
        {
          this.props.players.map(player => (
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}


// store가 갖고있는 sate를 현재 컴포럴넌의props로 subscribe한다.
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state가 들어간다
  players: state.playerReducer.players
});

// 커링 펑션, HoC // 파라미터 순서 : 부모->자식, 자식->부모
export default connect(mapStateToProps, null)(App); // 펑션이 만들어짐
