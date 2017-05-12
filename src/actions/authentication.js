import axios from 'axios';
import {SET_AUTHENTICATION} from '../constants';

export const setAuth = (authObj) => ({authObj, type: SET_AUTHENTICATION});

export const fetchOauth = (formObj) => dispatch => {
  axios.post( '/api/auth/oauth', formObj)
  .then(({data}) => {
    dispatch(setAuth(data));
    return data;
  });
};

export const fetchBasic = (formObj) => dispatch => {
  axios.post( '/api/auth/basic', formObj)
  .then(({data}) => {
    dispatch(setAuth(data));
    return data;
  });
};

