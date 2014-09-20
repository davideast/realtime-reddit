/** @jsx React.DOM */
var React = require('react'),
    FeedList = require('./FeedList'),
    Firebase = require('firebase');

var Feed = React.createClass({

  getItemRef: function(id) {
    return new Firebase('https://webapi.firebaseio.com/feed/' + id);
  },

  getInitialState: function() {
    return {
      items: []
    }
  },

  loadFeed: function() {
    var ref = new Firebase('https://webapi.firebaseio.com/feed');
    ref.on('value', function(snap) {

      var items = [];

      snap.forEach(function(snapItem) {
        var item = snapItem.val();
        item.key = snapItem.name();
        items.push(item);
      });

      this.setState({
        items: items
      });

    }.bind(this));
  },

  componentDidMount: function() {
    this.loadFeed();
  },

  handleVote: function (updateItem) {
    var ref = this.getItemRef(updateItem.key);
    ref.update(updateItem);
  },

  render: function() {

    return (
      <FeedList items={this.state.items} onVote={this.handleVote} />
    )
  }

});

module.exports = Feed;