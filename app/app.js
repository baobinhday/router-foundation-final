var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var Nav = require('Nav');
var Account = require('Account');
var Transaction = require('Transaction');
var Main = require('Main');

ReactDOM.render(
  <div>
    <Main/>
    <Account/>
    <Nav/>
    <Transaction/>
    <HomePage/>
  </div>,
  document.getElementById('root')
);
