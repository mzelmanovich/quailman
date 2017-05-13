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
    this.editor.$blockScrolling = Infinity;
    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
    this.editor.setShowPrintMargin(true);
    this.editor.setOptions({minLines: 25});
    this.editor.setOptions({maxLines: 25});
    this.editor.setValue(this.props.startVal || 'Hello World');
    this.editor.renderer.setShowGutter(false);
    this.editor.clearSelection();
  }

  componentWillUnmount(){
    this.editor.destroy();
  }

  componentDidUpdate(){
    console.log(this.props.startVal);
    this.editor.setValue(this.props.startVal || 'Hello World');
    this.editor.clearSelection();
  }

  render(){
    const exeFunction = (event) => {
      event.preventDefault();
      this.props.exe(this.editor.getValue());
    };

    return (
      <div className="col-xs-12 col-md-12 col-lg-12 text-center">
        <div ref={(el) => {this.domEl = el;}}  />
          <br />
      </div>
    );
  }
}

export default JSEditor;
