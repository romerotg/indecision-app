'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
