import React from 'react';
import axios from '../utils/api';

export class Heroes extends React.Component {

  state = {
    heroes: [],

  }
  render() {
    return (
      <ul>
        {this.state.heroes.map(hero => (
          <li key="{hero.id}">
            <img src={hero.photo} alt={hero.name} />
            <span>{hero.name}</span>
          </li>
          ))}
      </ul>
      );
  }
  componentDidMount() {
    this.getHeroes();
    console.log(this.state);
  };

  async getHeroes() {
    const {data} = await axios.get('/api/user/heroes');
    console.log(data);
    this.setState({heroes: data.data})
  }




}