/**
 * @jsx React.DOM
 */

var React = require('React');

var ShowFormButton = React.createClass({

  render: function() {

    var classString, buttonText;

    if (this.props.displayed) {
      classString = 'btn btn-default btn-block';
      buttonText = 'Cancel';
    } else {
      classString = 'btn btn-success btn-block';
      buttonText = 'Create New Item';
    }

    return (
      <button className={classString} onClick={this.props.toggleForm}>{buttonText}</button>
    );
  }

});

module.exports = ShowFormButton;
