import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import connect from '@vkontakte/vk-connect';
import App from './components/App/App';
import { initializeFirebase } from './actions/index';

initializeFirebase();

// Init VK  Mini App
// connect.send('VKWebAppInit');

ReactDOM.render(<App />, document.getElementById('root'));
