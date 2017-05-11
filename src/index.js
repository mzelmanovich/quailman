import JSONEditor from 'jsoneditor';
import ace from 'brace';
var container = document.getElementById('root');
var options = {
  modes: ['text', 'code', 'tree', 'form', 'view'],
  mode: 'code',
  ace: ace
};
var json = {
  array: [1, 2, 3],
  boolean: true,
  null: null,
  number: 123,
  object: {a: 'b', c: 'd'},
  string: 'Hello World'
};
var editor = new JSONEditor(container, options, json);
