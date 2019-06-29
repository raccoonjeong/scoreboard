import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

class Player extends React.Component {
  render() {// 퓨어컴포넌트는 반드시 render함수가 있어야하고 엘리먼트를 리턴해야함. 
    console.log(this.props.name, 'rendered'); // 클래스 컴포넌트로 바꾸었기때문에 항상 new로 생성이 된다. this를 붙여야함
    const {removePlayer, id, name, score, changeScore} = this.props;

    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>removePlayer(id)}>X</button>
      {name}
    </span>
        <Counter score={score} id={id}/>
      </div>
    )
  }
  componentWillReceiveProps(nextProps, nextContext) {
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) { // 꼭 Boolean형태로 리턴해야함.
    console.log(nextProps, nextState);
    return nextProps.score !== this.props.score; // 변경될때만 predicate 일어나도록..
  }
}


// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
})

// 커링 펑션, HoC // 파라미터 순서 : 부모->자식, 자식->부모
export default connect(null, mapActionToProps)(Player); // 펑션이 만들어짐
