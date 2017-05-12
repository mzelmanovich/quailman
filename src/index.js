import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Provider, connect} from 'react-redux';
import PorkChop from './components/PorkChop.jsx';
import OauthForm from './components/OauthForm.jsx';

window.axios = axios;

const root = document.getElementById('root');
const obj = {
  test: 123,
  foo: 'bar',
  hi: [0, 1, 2]
};
const func = "function oauth({url, key, secret}){\n  const base64 = new Buffer(`${key}:${secret}`).toString('base64');\n\t const requestOptions = {\n\t url,\n   headers: {\n\t  Authorization: 'Basic ' + base64\n   },\n   formData: {grant_type: 'client_credentials'},\n   method: 'post'\n };\n  return request(requestOptions)\n\t.then(({body}) => JSON.parse(body));\n}";
render(<OauthForm />, root);
