/** @jsx React.DOM */
var React = require('react'),
    FeedList = require('./FeedList');

var Feed = React.createClass({

  render: function() {

    return (
      <FeedList items={this.props.items} />
    )
  }

});

module.exports = Feed;