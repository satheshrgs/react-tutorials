import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './App';
import App1 from './App1';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Test />
    {/* <App1 /> */}
  </React.StrictMode>,
  document.getElementById('root1')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
