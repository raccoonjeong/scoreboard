import React from 'react';
import axios from '../../utils/api'

export class Register extends React.Component {
  state = {
    name: '',
    email: '',
    sex: {
      male: false,
      female: false
    },
    country: '',
    address: '',
    power: {
      flying: false,
      penetration: false,
      hacking: false,
      strength: false
    },
    photo: ''
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
  handlePower = (e) => {
    const power = {...this.state.power};
    power[e.target.value] = e.target.checked;
    this.setState({power});
  };
  handleUpload = (e) => {
    e.preventDefault();

    // 선택된 화일이 없으면 리턴
    console.log(e.target.files);
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append('photo', e.target.files[0], e.target.files[0].name);
    axios.post('/api/admin/photo', formData)
      .then(response => {
        console.log(response.data);
        this.setState({photo: response.data.data});
      });
  };
  submit = (e) => {
    e.preventDefault();

    const sendForm = {...this.state};
    // sex: 객체 => male or female 의 string 으로 변환
    for (let key in this.state.sex) {
      if (this.state.sex[key]) {
        Object.assign(sendForm, {sex: key})
      }
    }
    // powers: 객체 => 스트링 배열로 변환
    const powers = [];
    for (let key in this.state.powers) {
      if (this.state.power[key]) {
        powers.push(key);
      }
    }
    sendForm.powers = powers;

    console.log(sendForm);

    axios.post('/api/admin/hero', sendForm)
      .then(response => {
        console.log(response.data);
        // form 초기화
        this.setState({
          name: '',
          email: '',
          sex: {
            male: false,
            female: false
          },
          country: '',
          address: '',
          powers: {
            flying: false,
            penetration: false,
            hacking: false,
            strength: false
          },
          photo: ''
        });
      });
  }



  render() {
    return (
      <>
        <h3>Hero Registration</h3>
        <p>{JSON.stringify(this.state)}</p>
        <form onSubmit={this.submit}>
          <div className="form-group mt-1">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" id="name"
                   value={this.state.name} onChange={(e) => this.handleText(e, 'name')}
            required minLength="3" maxLength="10" />
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
            <select className="form-control" id="country" value={this.state.country} onChange={(e)=>this.handleText(e, 'country')}>
              <option value=""></option>
              <option value="Japan">Japan</option>
              <option value="American">American</option>
              <option value="Korean">Korean</option>
            </select>
          </div>

          <div className="form-group mt-1">
            <label htmlFor="address">Address</label>
            <textarea className="form-control" placeholder="Enter address" id="address" rows="3"
                      value={this.state.address} onChange={(e)=>this.handleText(e, 'address')}></textarea>
          </div>

          <div className="d-flex flex-column mt-1">
            <div>power</div>
            <div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="flying" className="form-check-input" id="flying"
                       checked={this.state.power.flying} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="flying">flying</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="penetration" className="form-check-input" id="penetration"
                       checked={this.state.power.penetration} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="penetration">penetration</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="hacking"  className="form-check-input" id="hacking"
                       checked={this.state.power.hacking} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="hacking">hacking</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="strength" className="form-check-input" id="strength"
                       checked={this.state.power.strength} onChange={this.handlePower} />
                <label className="form-check-label" htmlFor="strength">strength</label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-3 align-items-start">
            <div>사진등록</div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={this.handleUpload} />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            {
              this.state.photo ? <img src={this.state.photo} alt={this.state.name} style={{width: '200px'}} /> : ''
            }
          </div>
          <div className="m-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary">등록</button>
          </div>

        </form>

      </>
    );
  }
}