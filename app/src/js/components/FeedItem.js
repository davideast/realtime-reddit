/** @jsx React.DOM */
var React = require('react');

var FeedItem = React.createClass({

  voteUp: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },

  voteDown: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },

  vote: function(newCount) {
    this.props.onVote({
      key: this.props.key,
      voteCount: newCount,
      title: this.props.title,
      description: this.props.description
    });
  },

  render: function() {

    var positiveNegativeClass =
      this.props.voteCount >= 0 ? 'badge badge-success' : 'badge badge-danger';

    return (
      <li className="list-group-item">
         <span className={positiveNegativeClass}>{ this.props.voteCount }</span>
         <h4>{ this.props.title }</h4>
         { this.props.description }
         <span className="pull-right">
           <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
           <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
         </span>
      </li>
    );
  }
});

module.exports = FeedItem;