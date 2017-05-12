import React from 'react';
import {render} from 'react-dom';
import JSONViewer from './components/JSONViewer.jsx';

const root = document.getElementById('root');
const obj = {
  test: 123,
  foo: 'bar',
  hi: [0, 1, 2]
};

render(<JSONViewer jsonObject={obj} onChange={(thing) => console.log(thing.getText())} />, root);
