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
      modes: this.props.modes || ['code', 'tree', 'view'],
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
    JSONEditor.setMode(this.props.mode);
  }

  componentWillUnmount(){
    this.viewer = JSONEditor.destroy();
  }

  render(){
    return (<div ref={(el) => this.domEl = el}  />);
  }
}

export default JSONViewer;
