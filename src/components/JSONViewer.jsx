import React, {Component} from 'react';
import JSONEditor from 'jsoneditor';
import ace from 'brace';

class JSONViewer extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.domEl = null;
    this.viewer = null;
  }

  componentDidMount(){
    const container = this.domEl;
    const options = {
      mode: this.props.mode || 'tree',
      modes: ['code', 'form', 'text', 'tree', 'view'],
      ace,
      onChange: this.onChangeHandler.bind(this)
    };
    const viewer = new JSONEditor(container, options, this.props.jsonObject);
    this.viewer = viewer;
  }

  onChangeHandler(){
    const onChangeObj = {
      getText: this.viewer.getText.bind(this.viewer),
      getJSON: this.viewer.get.bind(this.viewer)
    };
    const func = this.props.onChange || (() => {});
    func(onChangeObj);
  }

  componentDidUpdate(){
    this.viewer.set(this.props.jsonObject);
  }

  componentWillUnmount(){
    this.viewer.destroy();
  }

  render(){
    return (
      <div className="col-xs-12 col-md-12 col-lg-12">
        <div ref={(el) => this.domEl = el}  />
      </div>
    );
  }
}

export default JSONViewer;
