import axios from 'axios';
import {ADD_CHOP, CHANGE_PORK_TYPE, ADD_RESULT, CHANGE_FUNCTION} from '../constants';

export const addChop = () => ({type: ADD_CHOP});
export const changeType = (index, porkType) => ({type: CHANGE_PORK_TYPE, index, porkType});
export const changeResult = (index, result) => ({type: ADD_RESULT, index, result});
export const changeCode = (index, code) => ({type: CHANGE_FUNCTION, function: code, index});

export const fetchAuthCode = (index, type) => dispatch => {
  return axios(`/api/auth/${type.toLowerCase()}/function`)
  .then(({data}) => {
    dispatch(changeCode(index, data.func));
    return data;
  });
};


export const fetchRequestCode = (index, type) => dispatch => {
  return axios(`/api/request/${type.toLowerCase()}/function`)
  .then(({data}) => {
    dispatch(changeCode(index, data.func));
    return data;
  });
};
