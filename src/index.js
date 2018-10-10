import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
