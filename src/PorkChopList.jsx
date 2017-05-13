import React from 'react';
import PorkChop from './components/PorkChop.jsx';
import {connect} from 'react-redux';
import {addChop, changeType, changeResult, fetchAuthCode, fetchBasicCode} from './actions/porkchops';
import {fetchOauth, fetchBasic} from './actions/authentication';
const PorkChopList = ({porkchops, addChop, typeChange, auths}) => {
  const mappedChops =  porkchops.map((chop, index) => {
    let post = null;
    if (chop.type === 'Oauth'){
      post = auths.oauth(index);
    }
    if (chop.type === 'Basic'){
      post = auths.basic(index);
    }
    if (chop.type === 'Get'){
      post = auths.basic(index);
    }
    return (<PorkChop index={index} key={index} chop={chop} selector={typeChange} post={post} />);
  });
  return (
  <div>
  <div className="row">
    {mappedChops}
     </div>
    <div className="row">
   <button type="button" className="btn btn-success" onClick={addChop}>Add Chop</button>
   </div>
  </div>);
};

const mapStateToProps = ({porkchops}) => ({porkchops});
const mapDispatchToProps = (dispatch) => ({
  addChop: (event) => {
    event.preventDefault();
    dispatch(addChop());
  },
  typeChange: (index, type) => (event) => {
    event.preventDefault();
    dispatch(changeType(index, type));
  },
  auths: {
    oauth: (index) => (formObj) => {
      event.preventDefault();
      dispatch(fetchOauth(formObj))
      .then(obj => {
        dispatch(fetchAuthCode(index, 'oauth'));
        dispatch(changeResult(index, obj));
      });
    },
    basic: (index) => (formObj) => {
      event.preventDefault();
      dispatch(fetchBasic(formObj))
      .then(obj => {
        dispatch(fetchAuthCode(index, 'basic'));
        dispatch(changeResult(index, obj));
      });
    }
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(PorkChopList);
