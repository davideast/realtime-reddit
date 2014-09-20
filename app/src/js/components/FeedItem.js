/** @jsx React.DOM */
var React = require('react');

var FeedItem = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
         <span className="badge badge-success">{ this.props.voteCount }</span>
         <h4>{ this.props.title }</h4>
         { this.props.description }
         <span className="pull-right">
           <button className="btn btn-sm btn-primary">&uarr;</button>
           <button className="btn btn-sm btn-primary">&darr;</button>
         </span>
      </li>
    );
  }
});

module.exports = FeedItem;