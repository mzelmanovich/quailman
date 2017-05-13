import React, {Component} from 'react';

class BasicForm extends Component{
  constructor(props){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.post = this.post.bind(this);
    this.state = {
      Username: '',
      Password: ''
    };
  }

  onChangeHandler(key){
    return (event) => {
      event.preventDefault();
      const val = event.target.value;
      const obj = {};
      obj[key] = val;
      this.setState(obj);
    };
  }

  post(){
    const func = this.props.postFunc || (() => {});
    func(this.state);
  }

  render(){
    return (
  <div className="col-xs-12 col-md-12 col-lg-12">
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Username</span>
   <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" onChange={this.onChangeHandler('Username')} />
  </div>
<br />
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Password</span>
     <input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon1" onChange={this.onChangeHandler('Password')} />
  </div>
  <br />
  <div className="text-center">
  <button type="button" className="btn btn-success" onClick={this.post}>Post</button>
  </div>
  <br />
  </div>

    );
  }
}

export default BasicForm;
