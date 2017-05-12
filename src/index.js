import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Provider, connect} from 'react-redux';
import PorkChop from './components/PorkChop.jsx';

window.axios = axios;

const root = document.getElementById('root');
const obj = {
  test: 123,
  foo: 'bar',
  hi: [0, 1, 2]
};
const func =
`function(){

}`;
render(<PorkChop
input={obj} output={obj} startFunction={func} exe={(thing) => console.log(thing)} />, root);
