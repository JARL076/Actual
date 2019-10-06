import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

Firebase.initializeApp({
  apiKey: "AIzaSyBcbcxAxs-T6cB2M6PfHCCyWON1CcAiO-w",
  authDomain: "actualp-3f9e6.firebaseapp.com",
  databaseURL: "https://actualp-3f9e6.firebaseio.com",
  projectId: "actualp-3f9e6",
  storageBucket: "",
  messagingSenderId: "287859946136",
  appId: "1:287859946136:web:e5ada72315d1916d17d6ed",
  measurementId: "G-R6MJY2KZR4"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
