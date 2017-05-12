import React from 'react';
import JSeditor from './JSEditor.jsx';
import  JSONViewer from './JSONViewer.jsx';

const PorkChop = ({input, startFunction, exe, output}) => {

  return (<div className="row">
<JSONViewer jsonObject={input || {}} />
<JSeditor startVal={startFunction} exe={exe} />
<JSONViewer jsonObject={output || {}} />
</div>);
};

export default PorkChop;
