import React, {Component} from 'react';

class OauthForm extends Component{
  constructor(props){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.post = this.post.bind(this);
    this.state = {
      key: '',
      url: '',
      secret: ''
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

  post(event){
    event.preventDefault();
    const func = this.props.postFunc || (() => {});
    func(this.state);
  }

  render(){
    return (
  <div>

  <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">url</span>
  <input type="text" className="form-control" placeholder="url" aria-describedby="basic-addon1" onChange={this.onChangeHandler('url')} />
  </div>

  <br />
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">key</span>
   <input type="text" className="form-control" placeholder="key" aria-describedby="basic-addon1" onChange={this.onChangeHandler('key')} />
  </div>
<br />
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">secret</span>
     <input type="text" className="form-control" placeholder="secret" aria-describedby="basic-addon1" onChange={this.onChangeHandler('secret')} />
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

export default OauthForm;
