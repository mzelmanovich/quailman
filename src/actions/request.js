import axios from 'axios';

export const makeRequest = (type, formObj) => () => {
  return axios.post( `/api/request/${type}`, formObj)
  .then(({data}) => {
    return data;
  });
};
