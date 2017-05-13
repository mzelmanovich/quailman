import axios from 'axios';
import {SET_LAST_RESP} from '../constants';

export const makeRequest = (type, formObj) => () => {
  return axios.post( `/api/request/${type}`, formObj)
  .then(({data}) => {
    return data;
  });
};

export const setResp = (resp) => ({
  type: SET_LAST_RESP,
  resp
});
