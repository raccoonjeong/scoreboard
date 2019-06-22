import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({value: e.target.value})
  };

  handleSubmit = (e) => {
    // 기본이벤트(페이지 재로딩) 막기
    e.preventDefault();
    this.props.addPlayer(this.state.value);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="input" type="text" placeholder="enter a player's name"
        value={this.state.value} onChange={this.handleChange}></input>
        <input className="input" type="submit" value="Add Player"></input>
      </form>
    );
  }
}