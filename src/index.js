import React from 'react';
import {render} from 'react-dom';
import JSONViewer from './components/JSONViewer.jsx';

const root = document.getElementById('root');
const obj = {
  test: 123,
  foo: 'bar'
};

render(<JSONViewer jsonObject={obj} />, root);
