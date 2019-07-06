import React from 'react';

export class Register extends React.Component {
  state = {
    name: '',
    email: '',
    sex: {
      male: false,
      female: false
    }
  };
  handleText = (e, key) => {
   // computed property - 키에 계산식을 넣는 것
    this.setState({[key]: e.target.value});
  };
  handleSex = (e) => {
    const sex = {
      male: false,
      female: false
    }
    sex[e.target.value] = e.target.checked;
    this.setState({sex});
  };

  render() {
    return (
      <>
        <h3>Hero Registration</h3>
        <p>{JSON.stringify(this.state)}</p>
        <form>
          <div className="form-group mt-1">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" id="name"
                   value={this.state.name} onChange={(e) => this.handleText(e, 'name')} />
          </div>

          <div className="form-group mt-1">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Email" id="email"
                   value={this.state.email} onChange={(e) => this.handleText(e, 'email')} />
          </div>

          <div className="d-flex flex-column mt-1">
            <div>성별</div>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sex" value="male" id="male"
                       checked={this.state.sex.male} onChange={this.handleSex}/>
                <label className="form-check-label" htmlFor="male">남자</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sex" value="female" id="female"
                       checked={this.state.sex.female} onChange={this.handleSex} />
                <label className="form-check-label" htmlFor="female">여자</label>
              </div>
            </div>
          </div>

          <div className="form-group mt-1">
            <label htmlFor="country">country</label>
            <select className="form-control" id="country">
              <option value="Japan">Japan</option>
              <option value="American">American</option>
              <option value="Korean">Korean</option>
            </select>
          </div>

          <div className="form-group mt-1">
            <label htmlFor="address">Address</label>
            <textarea className="form-control" placeholder="Enter address" id="address" rows="3"></textarea>
          </div>

          <div className="d-flex flex-column mt-1">
            <div>power</div>
            <div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="flying" />
                <label className="form-check-label" htmlFor="flying">flying</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="penetration" />
                <label className="form-check-label" htmlFor="penetration">penetration</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="hacking" />
                <label className="form-check-label" htmlFor="hacking">hacking</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="strength" />
                <label className="form-check-label" htmlFor="strength">strength</label>
              </div>
            </div>
          </div>

          <div className="m-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary">등록</button>
          </div>

        </form>

      </>
    );
  }
}