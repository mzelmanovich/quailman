import React, {Component} from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class JSEditor extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.domEl = null;
    this.editor = null;
  }

  componentDidMount(){
    const container = this.domEl;
    this.editor = ace.edit(container);
    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
    this.editor.setShowPrintMargin(true);
    this.editor.setOptions({minLines: 25});
    this.editor.setOptions({maxLines: 50});
  }

  componentWillUnmount(){
    this.editor.destroy();
  }

  render(){

    return (<div ref={(el) => {this.domEl = el;}}  />);
  }
}

export default JSEditor;
