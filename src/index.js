import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import connect from '@vkontakte/vk-connect';
import {composeWithDevTools} from "redux-devtools-extension";
import AppContainer from './components/App/AppContainer';
import { initializeFirebase } from './actions/firebase';
import * as router from './router/index';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';


// Init VK  Mini App
// connect.send('VKWebAppInit');


const route = router.initialize();
initializeFirebase();

// window.MY_ACTION = MY_ACTION;

const store = createStore(reducer, composeWithDevTools() );
// window.store = store; 


ReactDOM.render(<AppContainer router={route} store={store} />, document.getElementById('root'));
