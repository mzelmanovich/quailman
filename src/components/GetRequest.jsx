import React, {Component} from 'react';

class GetRequest extends Component{
  constructor(props){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.post = this.post.bind(this);
    this.state = {
      httpAndHost: '',
      uriPrefix: '',
      uriSuffix: '',
      param: '',
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
    const style = {outline: '3px solid blue'};
    return (
  <div className="col-xs-12 col-md-3 col-lg-3" style={style}>
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Http + Host</span>
   <input type="text" className="form-control" placeholder="Http + Host<" aria-describedby="basic-addon1" onChange={this.onChangeHandler('httpAndHost')} />
  </div>
<br />
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Uri Prefix</span>
     <input type="text" className="form-control" placeholder="Uri Prefix" aria-describedby="basic-addon1" onChange={this.onChangeHandler('uriPrefix')} />
  </div>
  <br />
      <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Uri Suffix</span>
     <input type="text" className="form-control" placeholder="Uri Suffix" aria-describedby="basic-addon1" onChange={this.onChangeHandler('uriSuffix')} />
  </div>
  <br />

        <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Param</span>
     <input type="text" className="form-control" placeholder="Param" aria-describedby="basic-addon1" onChange={this.onChangeHandler('param')} />
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

export default GetRequest;
