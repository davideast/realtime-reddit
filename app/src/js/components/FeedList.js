/** @jsx React.DOM */
var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem title={item.title}
                       description={item.description}
                       voteCount={item.voteCount}
                       key={item.key}
                       onVote={this.props.onVote}
             />
    }.bind(this));

    return (
      <div className="container">

         <ul className="list-group">
            { feedItems }
         </ul>

      </div>
    );
  }
});

module.exports = FeedList;