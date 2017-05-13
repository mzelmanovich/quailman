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
      url: ''
    };
  }

  onChangeHandler(key){
    return (event) => {
      if (key !== 'url'){
        event.preventDefault();
        const val = event.target.value;
        const obj = {};
        obj[key] = val;
        let state = this.state;
        state[key] = val;
        let url = this.state.httpAndHost;
        if (state.uriPrefix.length > 0){
          url = url + '/'  + state.uriPrefix;
        }
        if (state.param.length > 0){
          url = url + '/'  + state.param;
        }
        if (state.uriSuffix.length > 0){
          url = url + '/'  + state.uriSuffix;
        }
        obj.url = url;
        this.setState(obj);
      } else {
        let url = event.target.value;
        this.setState({url});
      }
    };
  }

  post(){
    const func = this.props.postFunc || (() => {});
    func(this.state.url);
  }

  render(){
    return (
  <div className="col-xs-12 col-md-12 col-lg-12">
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Http + Host</span>
   <input type="text" className="form-control" placeholder="Http + Host" aria-describedby="basic-addon1" onChange={this.onChangeHandler('httpAndHost')} />
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
          <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Url</span>
     <input type="text" className="form-control" placeholder="Url" aria-describedby="basic-addon1" value={this.state.url} onChange={this.onChangeHandler('url')} />
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
