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
    this.editor.setOptions({maxLines: 25});
    this.editor.setValue(this.props.startVal || 'Hello World');
    this.editor.clearSelection();
  }

  componentWillUnmount(){
    this.editor.destroy();
  }

  render(){
    const exeFunction = (event) => {
      event.preventDefault();
      this.props.exe(this.editor.getValue());
    };

    return (
      <div className="col-xs-12 col-md-6 col-lg-6 text-center">
        <div ref={(el) => {this.domEl = el;}}  />
          <br />
        <button type="button" className="btn btn-success" onClick={exeFunction}>Execute</button>
      </div>
    );
  }
}

export default JSEditor;
