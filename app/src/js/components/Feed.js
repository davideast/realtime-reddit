/** @jsx React.DOM */
var React = require('react'),
    FeedList = require('./FeedList'),
    FeedForm = require('./FeedForm'),
    ShowFormButton = require('./ShowFormButton'),
    Firebase = require('firebase'),
    _ = require('lodash');

var Feed = React.createClass({

  getItemRef: function(id) {
    return new Firebase('https://webapi.firebaseio.com/feed/' + id);
  },

  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false
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

      var sortedItems = _.sortBy(items, function(item) {
        return -item.voteCount;
      }, items);

      this.setState({
        items: sortedItems
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

  toggleForm: function () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  render: function() {
    return (
      <div>

        <div className="container">
          <ShowFormButton displayed={this.state.formDisplayed} toggleForm={this.toggleForm} />
        </div>

        <FeedForm displayed={this.state.formDisplayed} />

        <br />
        <br />

        <FeedList items={this.state.items}
                  onVote={this.handleVote} />
      </div>
    );
  }

});

module.exports = Feed;

  //
  //
  // <Feed items="items">
  //   <SettingsPanel>
  //     <ToggleFeedEditor />
  //     <LowVotedCheckbox value="disableLowVoted" />
  //   </SettingsPanel>
  //
  //   <FeedForm displayed="false" />
  //
  //   <FeedList>
  //     <FeedItem />
  //     <FeedItem disabled="true" />
  //   </FeedList>
  //
  // </Feed>
  //
