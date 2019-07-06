import React from 'react';
import axios from '../../utils/api'

export class Hero extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      hero: null
    }
  }
  componentDidMount() {
    // uri 파라미터 얻기: this.props.match.params
    const {id} = this.props.match.params;
    this.getHero(id);
  }
  async getHero(id) {
    const res = await axios.get(`/api/user/hero/${id}`);
    this.setState({hero:res.data});

  }

  render() {
    return (
      this.state.hero ?
        <div>
          <div className="form-group mt-1">
            <label htmlFor="name">Name:</label>
            <p className="form-control form-control-sm" id="name">{this.state.hero.name}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address:</label>
            <p className="form-control form-control-sm" id="email">{this.state.hero.email}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="sex">Sex:</label>
            <p className="form-control form-control-sm" id="sex">{this.state.hero.sex}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="country">Country:</label>
            <p className="form-control form-control-sm" id="country">{this.state.hero.country}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Power:</label>
            <p className="form-control form-control-sm" id="power">{this.state.hero.power}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Photo:</label>
            {
              this.state.hero.photo ? <img src={this.state.hero.photo} alt={this.state.hero.name}></img> : ''
            }
          </div>
        </div>
        :
        ''
    );
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps);
    this.getHero(nextProps.match.params.id);
  }
}