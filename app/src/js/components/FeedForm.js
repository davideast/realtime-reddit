/** @jsx React.DOM */

var React = require('React');

var FeedForm = React.createClass({

  render: function() {

    var formStyle = {
      display: this.props.displayed ? 'block' : 'none'
    };

    return (
      <form id="feedForm" role="form" className="container" style={formStyle}>

        <div className="form-group">

          <input ref="title" type="text" className="form-control" placeholder="Title" />
          <input ret="desc" type="text" className="form-control" placeholder="Description" />

          <button className="btn btn-primary btn-block">Add</button>

        </div>

      </form>
    );
  }

});

module.exports = FeedForm;
