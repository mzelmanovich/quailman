import React, {Component} from 'react';
import JSONEditor from 'jsoneditor';

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
      mode: 'view'
    };
    const viewer = new JSONEditor(container, options, this.props.jsonObject);
    this.viewer = viewer;
  }

  componentWillUnmount(){
    this.viewer = JSONEditor.destroy();
  }

  render(){
    return (<div ref={(el) => this.domEl = el}  />);
  }
}

export default JSONViewer;
