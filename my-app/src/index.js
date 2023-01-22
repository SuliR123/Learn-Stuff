import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, Stinky} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="flex max-w-screen max-h-screen">
    <img class="w-80 h-50" src="https://cdn.dribbble.com/users/1044993/screenshots/5945543/media/4f75b2ce7a66bb8f3704f7fcbb40d8f9.png?compress=1&resize=400x300&vertical=top"></img>
    <App />
    <Stinky />
  </div> 
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();