import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import vkBridge from '@vkontakte/vk-bridge';
import AppContainer from './app/components/App/AppContainer';
import { initializeFirebase } from './api/firebase';
import * as router from './router/index';
import { getStore } from './app/store';

if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      trackExtraHooks: [[require('react-redux/lib'), 'useSelector']],
    });
}

// Init VK  Mini App
vkBridge.send('VKWebAppInit');


const route = router.initialize();
initializeFirebase();

const store = getStore();

ReactDOM.render(<AppContainer router={route} store={store} />, document.getElementById('root'));
