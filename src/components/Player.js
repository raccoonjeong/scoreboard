import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.PureComponent {
  render() {// 퓨어컴포넌트는 반드시 render함수가 있어야하고 엘리먼트를 리턴해야함. 
    console.log(this.props.name, 'rendered'); // 클래스 컴포넌트로 바꾸었기때문에 항상 new로 생성이 된다. this를 붙여야함
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>this.props.removePlayer(this.props.id)}>X</button>
      {this.props.name}
    </span>
        <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/>
      </div>
    )
  }
}
