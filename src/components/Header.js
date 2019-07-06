import React from 'react';
import {Stats} from './Stats';
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import styles from '../pages/scoreboard/Scoreboard.module.css';

const Header = ({title, players}) => {
  // destruct assignment
  return (
    <header className={styles.header}>
      <Stats players ={players}/>
      <h1 className="h1">{title}</h1>
      <Stopwatch/>
    </header>
  );
};
// 타입스크립트 쓰는게 나음
Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps = {
  title: 'Scoreboard'
}

// store가 갖고있는 sate를 현재 컴포럴넌의props로 subscribe한다.
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state가 들어간다
  title: state.playerReducer.title, // 이부분을 이해해야함
});

// 커링 펑션, HoC // 파라미터 순서 : 부모->자식, 자식->부모
export default connect(mapStateToProps, null)(Header); // 펑션이 만들어짐