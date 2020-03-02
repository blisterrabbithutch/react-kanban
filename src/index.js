import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import connect from '@vkontakte/vk-connect';
import App from './components/App/App';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDIZa3wFEnTnaqOe_GNpIVLOc4AXSamds4",
  authDomain: "kanban-custom.firebaseapp.com",
  databaseURL: "https://kanban-custom.firebaseio.com",
  projectId: "kanban-custom",
  storageBucket: "kanban-custom.appspot.com",
  messagingSenderId: "756329390269",
  appId: "1:756329390269:web:6e50b4f79283638d0597d4",
  measurementId: "G-094373YZE5"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log('firebase – ', firebase);


// Init VK  Mini App
// connect.send('VKWebAppInit');

ReactDOM.render(<App />, document.getElementById('root'));
