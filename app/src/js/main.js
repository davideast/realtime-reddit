/** @jsx React.DOM */
var React = require('react'),
    Feed = require('./components/Feed');

////  Using local data as props
// var FEED_ITEMS = [
//   { key: '1', title: 'Realtime data is awesome', description: 'Firebase is cool', voteCount: 49 },
//   { key: '2', title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
//   { key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15},
// ];

React.renderComponent(
  <Feed />,
  document.getElementById('app')
);
