/** @jsx React.DOM */

var React = require('React');

var FeedForm = React.createClass({

  handleNewItem: function(e) {
    e.preventDefault();

    // create the new item to be added
    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };

    // reset the form values
    this.refs.feedForm.getDOMNode().reset();

    // trigger the callback function
    this.props.onNewItem(newItem);
  },

  render: function() {

    // set the inline style to hide the form if displayed is false
    var formStyle = {
      display: this.props.displayed ? 'block' : 'none'
    };

    return (
      <form ref="feedForm" className="container" style={formStyle} onSubmit={this.handleNewItem}>

        <div className="form-group">

          <input ref="title" type="text" className="form-control" placeholder="Title" />
          <input ref="desc" type="text" className="form-control" placeholder="Description" />

          <button type="submit" className="btn btn-primary btn-block">Add</button>

        </div>

      </form>
    );
  }

});

module.exports = FeedForm;
