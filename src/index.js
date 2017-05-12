import React from 'react';
import {render} from 'react-dom';
import JSONViewer from './components/JSONViewer.jsx';
import JSEditor from './components/JSEditor.jsx';

const root = document.getElementById('root');
const obj = {
  test: 123,
  foo: 'bar',
  hi: [0, 1, 2]
};

render(<JSEditor
startVal={
  `obj
  abc
`} exe={(thing) => console.log(thing)} />, root);
