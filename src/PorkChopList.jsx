import React from 'react';
import PorkChop from './components/PorkChop.jsx';
import {connect} from 'react-redux';
import {addChop, changeType, changeResult, fetchAuthCode, fetchRequestCode} from './actions/porkchops';
import {fetchOauth, fetchBasic} from './actions/authentication';
import {makeRequest, setResp} from './actions/request';

const PorkChopList = ({porkchops, addChop, typeChange, auths, requests, auth, body}) => {
  const mappedChops =  porkchops.map((chop, index) => {
    let post = null;
    if (chop.type === 'Oauth'){
      post = auths.oauth(index);
    }
    if (chop.type === 'Basic'){
      post = auths.basic(index);
    }
    if (chop.type === 'Get'){
      post = requests.get(index, auth);
    }
    if (chop.type === 'Put'){
      post = requests.put(index, auth);
    }
    if (chop.type === 'Post'){
      post = requests.post(index, auth, body);
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

const mapStateToProps = ({porkchops, authentication, lastResp}) => ({porkchops, auth: authentication, body: lastResp});
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
  },
  requests: {
    get: (index, authorization) => (url) => {
      event.preventDefault();
      dispatch(makeRequest('get', {url, authorization}))
      .then(obj => {
        dispatch(fetchRequestCode(index, 'get'));
        dispatch(changeResult(index, obj));
        dispatch(setResp(obj));
      });
    },
    post: (index, authorization, body) => (url) => {
      event.preventDefault();
      dispatch(makeRequest('post', {url, authorization, body}))
      .then(obj => {
        dispatch(fetchRequestCode(index, 'post'));
        dispatch(changeResult(index, obj));
        dispatch(setResp(obj));
      });
    },
    put: (index, authorization) => (url) => {
      event.preventDefault();
      dispatch(makeRequest('put', {url, authorization}))
      .then(obj => {
        dispatch(fetchRequestCode(index, 'put'));
        dispatch(changeResult(index, obj));
        dispatch(setResp(obj));
      });
    }
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(PorkChopList);
