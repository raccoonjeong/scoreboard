import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
  render() {// 퓨어컴포넌트는 반드시 render함수가 있어야하고 엘리먼트를 리턴해야함. 
    console.log(this.props.name, 'rendered'); // 클래스 컴포넌트로 바꾸었기때문에 항상 new로 생성이 된다. this를 붙여야함
    const {removePlayer, id, name, score, changeScore} = this.props;

    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>removePlayer(this.props.id)}>X</button>
      {name}
    </span>
        <Counter score={score} id={id} changeScore={changeScore}/>
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
