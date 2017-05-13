import React from 'react';
import JSeditor from './JSEditor.jsx';
import  JSONViewer from './JSONViewer.jsx';
import TypePicker from './TypePicker.jsx';
import OauthForm from './OauthForm.jsx';
import BasicForm from './BasicForm.jsx';
import Pannel from './Pannel.jsx';

const PorkChop = ({index, chop, selector, post}) => {

  if (chop.type === 'TypePicker'){
    return (<div className="col-xs-6 col-md-6 col-lg-6">
      <Pannel title={'Chop: ' + (index + 1)}>
          <TypePicker index={index} selector={selector} />
      </Pannel>
      </div>);
  }

  let form = null;
  if (chop.type === 'Basic'){
    form = <BasicForm postFunc={post} />;
  }

  if (chop.type === 'Oauth'){
    form = <OauthForm postFunc={post} />;
  }
  return (<div className="col-xs-6 col-md-6 col-lg-6">
      <Pannel title={'Chop: ' + (index + 1)}>
  <ul className="nav nav-tabs" role="tablist">
    <li role="presentation" className="active"><a href={`#inputs${index}`} aria-controls={`inputs${index}`} role="tab" data-toggle="tab">Inputs</a></li>
    <li role="presentation"><a href={`#code${index}`}  aria-controls={`code${index}`}  role="tab" data-toggle="tab">Code</a></li>
    <li role="presentation"><a href={`#result${index}`}  aria-controls={`result${index}`}  role="tab" data-toggle="tab">Result</a></li>
  </ul>

  <div className="tab-content" style={{height: '400px'}}>
    <div role="tabpanel" className="tab-pane fade in active" id={`inputs${index}`}>{form}</div>
    <div role="tabpanel" className="tab-pane fade" id={`code${index}`}><JSeditor startVal={chop.function} /></div>
    <div role="tabpanel" className="tab-pane fade" id={`result${index}`}><JSONViewer jsonObject={chop.result} /></div>
  </div>
 </Pannel>
</div>);
};

export default PorkChop;
