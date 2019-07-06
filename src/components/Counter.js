import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
import styles from '../pages/scoreboard/Scoreboard.module.css';
import classNames from 'classnames';


class Counter extends React.Component {
  constructor(){
    super(); // 부모의 모든 것을 초기화해주어야하기 때문..
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
  render() { // onClick 안에 들어가는 것은 함수로 감싸야한다.
    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick = {() => this.props.changeScore(this.props.id, -1)}> -</button>
        <span className={styles["counter-score"]}>{this.props.score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick = {() => this.props.changeScore(this.props.id, 1)}> +</button>
      </div>)
  }
}
Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

// 커링 펑션, HoC // 파라미터 순서 : 부모->자식, 자식->부모
export default connect(null, mapActionToProps)(Counter); // 펑션이 만들어짐
