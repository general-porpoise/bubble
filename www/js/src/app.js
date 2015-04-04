var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <h1>Hello World!</h1>
    );
  }
});

module.exports = function() {
  React.render(<App />, document.body);
};
