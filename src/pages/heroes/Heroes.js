import React from 'react';
import axios from '../../utils/api';

export class Heroes extends React.Component {

  state = {
    heroes: [],

  }
  render() {
    return (
      <div className="row">
        {this.state.heroes.map(hero => (
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
            <div className="card">
              <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-pets-24px.svg'}
                   style={{width: '100%'}} alt={hero.name}></img>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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