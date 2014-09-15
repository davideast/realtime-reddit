/** @jsx React.DOM */
var React = require('react'),
    Message = require('./Message');

var App =
  React.createClass({
    render:function(){
      return (
        <div>
          Boilerplate app
          <Message />
        </div>
      );
    }
  });

module.exports = App;