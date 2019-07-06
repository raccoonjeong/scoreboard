import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = (e) => {
    // 기본이벤트(페이지 재로딩) 막기
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value); // 자바스크립트 DOM API
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} type="text" placeholder="enter a player's name"
               ref={this.textInput}></input>
        <input className={styles.input} type="submit" value="Add Player"></input>
      </form>
    );
  }
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC // 파라미터 순서 : 부모->자식, 자식->부모
export default connect(null, mapActionToProps)(AddPlayerForm); // 펑션이 만들어짐