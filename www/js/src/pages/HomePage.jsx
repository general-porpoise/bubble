var React = require('react');
var Header = require('../components/Header.jsx');

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <Header text='Hello World' back='true'/>
        Hello World!
      </div>
    );
  }
});

module.exports = HomePage;
