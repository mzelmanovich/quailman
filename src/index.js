import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './AppContainer.jsx';
import store from './store';

const root = document.getElementById('root');

const RenderStuff = (<Provider store = {store}>
   <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ (() => (<h1>hi</h1>)) } />
    </Route>
   </Router>
</Provider>);
render(RenderStuff, root);
