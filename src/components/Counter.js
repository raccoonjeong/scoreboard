import React from 'react';

export class Counter extends React.Component {
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
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick = {()=>this.handleScore(-1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick = {()=>this.handleScore(1)}> +</button>
      </div>)
  }
}