import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gallery from './components/forms/gallery';
import Admin from './components/forms/admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
