import React from 'react';
import Header from "../../components/Header";
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";
import styles from './Scoreboard.module.css';

class Scoreboard extends React.Component{


  render() {
    return (
      <div className={styles.scoreboard}>
        <Header players={this.props.players}/>
        {
          this.props.players.map(player => (
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}/>
          ))
        }
        <AddPlayerForm/>
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
export default connect(mapStateToProps, null)(Scoreboard); // 펑션이 만들어짐