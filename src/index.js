import React from 'react';
import {render} from 'react-dom';
import PorkChop from './components/PorkChop.jsx';

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
