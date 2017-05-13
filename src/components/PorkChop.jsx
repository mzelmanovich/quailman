import React from 'react';
import JSeditor from './JSEditor.jsx';
import  JSONViewer from './JSONViewer.jsx';

const PorkChop = ({index, input, startFunction, exe, output}) => {

  return (<div>

  <ul className="nav nav-tabs" role="tablist">
    <li role="presentation" className="active"><a href={`#inputs${index}`} aria-controls={`inputs${index}`} role="tab" data-toggle="tab">Inputs</a></li>
    <li role="presentation"><a href={`#code${index}`}  aria-controls={`code${index}`}  role="tab" data-toggle="tab">Code</a></li>
    <li role="presentation"><a href={`#result${index}`}  aria-controls={`result${index}`}  role="tab" data-toggle="tab">Result</a></li>
  </ul>

  <div className="tab-content">
    <div role="tabpanel" className="tab-pane fade in active" id={`inputs${index}`}><p>inputs</p></div>
    <div role="tabpanel" className="tab-pane fade" id={`code${index}`}><p>code</p></div>
    <div role="tabpanel" className="tab-pane fade" id={`result${index}`}><p>result</p></div>
  </div>

</div>);
};

export default PorkChop;
