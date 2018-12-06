import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DrizzleContext from './components/DrizzleContext';
import { Drizzle } from 'drizzle';

import drizzleOptions from "./drizzleOptions";
import store from'./store';

const drizzle = new Drizzle(drizzleOptions, store);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <App />
  </DrizzleContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
